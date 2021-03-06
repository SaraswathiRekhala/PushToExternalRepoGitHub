/*Copyright (c) 2016-2017 wavemaker.com All Rights Reserved.
 This software is the confidential and proprietary information of wavemaker.com You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with wavemaker.com*/
package com.datatablescenarioswmo.dbscenarios.controller;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/

import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.web.util.UriComponentsBuilder;

import com.fasterxml.jackson.annotation.JsonView;
import com.wavemaker.commons.json.views.JsonViews.BlobAsUrlView;
import com.wavemaker.commons.wrapper.IntegerWrapper;
import com.wavemaker.commons.wrapper.StringWrapper;
import com.wavemaker.runtime.data.export.ExportOptions;
import com.wavemaker.runtime.file.manager.ExportedFileManager;
import com.wavemaker.runtime.file.model.Downloadable;
import com.wavemaker.runtime.util.WMMultipartUtils;
import com.wavemaker.tools.api.core.annotations.WMAccessVisibility;
import com.wavemaker.tools.api.core.models.AccessSpecifier;
import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiOperation;

import com.datatablescenarioswmo.dbscenarios.AllTypes;
import com.datatablescenarioswmo.dbscenarios.service.DbscenariosQueryExecutorService;
import com.datatablescenarioswmo.dbscenarios.models.query.*;

@RestController(value = "Dbscenarios.QueryExecutionController")
@RequestMapping("/dbscenarios/queryExecutor")
@Api(value = "QueryExecutionController", description = "controller class for query execution")
public class QueryExecutionController {

    private static final Logger LOGGER = LoggerFactory.getLogger(QueryExecutionController.class);

    @Autowired
    private DbscenariosQueryExecutorService queryService;

    @Autowired
	private ExportedFileManager exportedFileManager;

    @JsonView(BlobAsUrlView.class)
    @RequestMapping(value = "/queries/SV_UserLoginData", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "SV_UserLoginData")
    public Page<SvUserLoginDataResponse> executeSV_UserLoginData(Pageable pageable, HttpServletRequest _request) {
        LOGGER.debug("Executing named query: SV_UserLoginData");
        Page<SvUserLoginDataResponse> _result = queryService.executeSV_UserLoginData(pageable);
        LOGGER.debug("got the result for named query: SV_UserLoginData, result:{}", _result);
        UriComponentsBuilder _uriBuilder = ServletUriComponentsBuilder.fromRequest(_request);
        _uriBuilder.path("/{userId}/content/{_fieldName_}");
        for(SvUserLoginDataResponse _content : _result.getContent()) {
            Map<String, Object> _properties = new HashMap(2);
            _properties.put("userId", _content.getUserId());
            _properties.put("_fieldName_", "profile");
            if(_content.getProfile() != null) {
                _content.setProfile(_uriBuilder.buildAndExpand(_properties).toUriString().getBytes());
            } else {
                _content.setProfile(null);
            }
        }
        return _result;
    }

    @ApiOperation(value = "Retrives the BLOB content for property profile in query SV_UserLoginData")
    @RequestMapping(value = "/queries/SV_UserLoginData/{userId}/content/profile", method = RequestMethod.GET, produces = "application/octet-stream")
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public Downloadable getProfileContentForSV_UserLoginData(@PathVariable("userId") Short userId, @RequestParam(value="downloadAsAttachment", defaultValue = "false") boolean downloadAsAttachment, HttpServletRequest _request) {
        LOGGER.debug("Executing named query: SV_UserLoginData");

        InputStream _result = queryService.getProfileContentForSV_UserLoginData(userId);
        return WMMultipartUtils.buildDownloadResponse(_request, _result, downloadAsAttachment);
    }

    @ApiOperation(value = "Returns downloadable file url for query SV_UserLoginData")
    @RequestMapping(value = "/queries/SV_UserLoginData/export", method = RequestMethod.POST)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public StringWrapper exportSV_UserLoginData(@RequestBody ExportOptions exportOptions, Pageable pageable) {
        LOGGER.debug("Exporting named query: SV_UserLoginData");

        String exportedFileName = exportOptions.getFileName();
        if(exportedFileName == null || exportedFileName.isEmpty()) {
            exportedFileName = "SV_UserLoginData";
        }
        exportedFileName += exportOptions.getExportType().getExtension();

        String exportedUrl = exportedFileManager.registerAndGetURL(exportedFileName,
                        outputStream -> queryService.exportSV_UserLoginData( exportOptions, pageable, outputStream));

        return new StringWrapper(exportedUrl);
    }

    @RequestMapping(value = "/queries/SV_UpdateListOfRecords", method = RequestMethod.PUT)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "SV_UpdateListOfRecords")
    public IntegerWrapper executeSV_UpdateListOfRecords(@Valid @RequestBody SvUpdateListOfRecordsRequest svUpdateListOfRecordsRequest, HttpServletRequest _request) {
        LOGGER.debug("Executing named query: SV_UpdateListOfRecords");
        Integer _result = queryService.executeSV_UpdateListOfRecords(svUpdateListOfRecordsRequest);
        LOGGER.debug("got the result for named query: SV_UpdateListOfRecords, result:{}", _result);
        return new IntegerWrapper(_result);
    }

    @JsonView(BlobAsUrlView.class)
    @RequestMapping(value = "/queries/Sv_AllTypes", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "AllTypes")
    public Page<SvAllTypesResponse> executeSv_AllTypes(Pageable pageable, HttpServletRequest _request) {
        LOGGER.debug("Executing named query: Sv_AllTypes");
        Page<SvAllTypesResponse> _result = queryService.executeSv_AllTypes(pageable);
        LOGGER.debug("got the result for named query: Sv_AllTypes, result:{}", _result);
        UriComponentsBuilder _uriBuilder = ServletUriComponentsBuilder.fromRequest(_request);
        _uriBuilder.path("/{pkId}/content/{_fieldName_}");
        for(SvAllTypesResponse _content : _result.getContent()) {
            Map<String, Object> _properties = new HashMap(2);
            _properties.put("pkId", _content.getPkId());
            _properties.put("_fieldName_", "blobCol");
            if(_content.getBlobCol() != null) {
                _content.setBlobCol(_uriBuilder.buildAndExpand(_properties).toUriString().getBytes());
            } else {
                _content.setBlobCol(null);
            }
        }
        return _result;
    }

    @ApiOperation(value = "Retrives the BLOB content for property blobCol in query Sv_AllTypes")
    @RequestMapping(value = "/queries/Sv_AllTypes/{pkId}/content/blobCol", method = RequestMethod.GET, produces = "application/octet-stream")
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public Downloadable getBlobColContentForSv_AllTypes(@PathVariable("pkId") Integer pkId, @RequestParam(value="downloadAsAttachment", defaultValue = "false") boolean downloadAsAttachment, HttpServletRequest _request) {
        LOGGER.debug("Executing named query: Sv_AllTypes");

        InputStream _result = queryService.getBlobColContentForSv_AllTypes(pkId);
        return WMMultipartUtils.buildDownloadResponse(_request, _result, downloadAsAttachment);
    }

    @ApiOperation(value = "Returns downloadable file url for query Sv_AllTypes")
    @RequestMapping(value = "/queries/Sv_AllTypes/export", method = RequestMethod.POST)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public StringWrapper exportSv_AllTypes(@RequestBody ExportOptions exportOptions, Pageable pageable) {
        LOGGER.debug("Exporting named query: Sv_AllTypes");

        String exportedFileName = exportOptions.getFileName();
        if(exportedFileName == null || exportedFileName.isEmpty()) {
            exportedFileName = "Sv_AllTypes";
        }
        exportedFileName += exportOptions.getExportType().getExtension();

        String exportedUrl = exportedFileManager.registerAndGetURL(exportedFileName,
                        outputStream -> queryService.exportSv_AllTypes( exportOptions, pageable, outputStream));

        return new StringWrapper(exportedUrl);
    }

    @RequestMapping(value = "/queries/HQL_AllTypesWithId", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "HQL_AllTypesWithId")
    public Page<AllTypes> executeHQL_AllTypesWithId(@RequestParam(value = "PKID") Integer pkid, Pageable pageable, HttpServletRequest _request) {
        LOGGER.debug("Executing named query: HQL_AllTypesWithId");
        Page<AllTypes> _result = queryService.executeHQL_AllTypesWithId(pkid, pageable);
        LOGGER.debug("got the result for named query: HQL_AllTypesWithId, result:{}", _result);
        return _result;
    }

    @ApiOperation(value = "Returns downloadable file url for query HQL_AllTypesWithId")
    @RequestMapping(value = "/queries/HQL_AllTypesWithId/export", method = RequestMethod.POST)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public StringWrapper exportHQL_AllTypesWithId(@RequestParam(value = "PKID") Integer pkid, @RequestBody ExportOptions exportOptions, Pageable pageable) {
        LOGGER.debug("Exporting named query: HQL_AllTypesWithId");

        String exportedFileName = exportOptions.getFileName();
        if(exportedFileName == null || exportedFileName.isEmpty()) {
            exportedFileName = "HQL_AllTypesWithId";
        }
        exportedFileName += exportOptions.getExportType().getExtension();

        String exportedUrl = exportedFileManager.registerAndGetURL(exportedFileName,
                        outputStream -> queryService.exportHQL_AllTypesWithId(pkid,  exportOptions, pageable, outputStream));

        return new StringWrapper(exportedUrl);
    }

    @JsonView(BlobAsUrlView.class)
    @RequestMapping(value = "/queries/SV_AllTypesData", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "SV_AllTypesData")
    public Page<SvAllTypesDataResponse> executeSV_AllTypesData(Pageable pageable, HttpServletRequest _request) {
        LOGGER.debug("Executing named query: SV_AllTypesData");
        Page<SvAllTypesDataResponse> _result = queryService.executeSV_AllTypesData(pageable);
        LOGGER.debug("got the result for named query: SV_AllTypesData, result:{}", _result);
        UriComponentsBuilder _uriBuilder = ServletUriComponentsBuilder.fromRequest(_request);
        _uriBuilder.path("/{pkId}/content/{_fieldName_}");
        for(SvAllTypesDataResponse _content : _result.getContent()) {
            Map<String, Object> _properties = new HashMap(2);
            _properties.put("pkId", _content.getPkId());
            _properties.put("_fieldName_", "blobCol");
            if(_content.getBlobCol() != null) {
                _content.setBlobCol(_uriBuilder.buildAndExpand(_properties).toUriString().getBytes());
            } else {
                _content.setBlobCol(null);
            }
        }
        return _result;
    }

    @ApiOperation(value = "Retrives the BLOB content for property blobCol in query SV_AllTypesData")
    @RequestMapping(value = "/queries/SV_AllTypesData/{pkId}/content/blobCol", method = RequestMethod.GET, produces = "application/octet-stream")
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public Downloadable getBlobColContentForSV_AllTypesData(@PathVariable("pkId") Integer pkId, @RequestParam(value="downloadAsAttachment", defaultValue = "false") boolean downloadAsAttachment, HttpServletRequest _request) {
        LOGGER.debug("Executing named query: SV_AllTypesData");

        InputStream _result = queryService.getBlobColContentForSV_AllTypesData(pkId);
        return WMMultipartUtils.buildDownloadResponse(_request, _result, downloadAsAttachment);
    }

    @ApiOperation(value = "Returns downloadable file url for query SV_AllTypesData")
    @RequestMapping(value = "/queries/SV_AllTypesData/export", method = RequestMethod.POST)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public StringWrapper exportSV_AllTypesData(@RequestBody ExportOptions exportOptions, Pageable pageable) {
        LOGGER.debug("Exporting named query: SV_AllTypesData");

        String exportedFileName = exportOptions.getFileName();
        if(exportedFileName == null || exportedFileName.isEmpty()) {
            exportedFileName = "SV_AllTypesData";
        }
        exportedFileName += exportOptions.getExportType().getExtension();

        String exportedUrl = exportedFileManager.registerAndGetURL(exportedFileName,
                        outputStream -> queryService.exportSV_AllTypesData( exportOptions, pageable, outputStream));

        return new StringWrapper(exportedUrl);
    }

}