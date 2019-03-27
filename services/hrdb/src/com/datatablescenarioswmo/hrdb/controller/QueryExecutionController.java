/*Copyright (c) 2016-2017 wavemaker.com All Rights Reserved.
 This software is the confidential and proprietary information of wavemaker.com You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with wavemaker.com*/
package com.datatablescenarioswmo.hrdb.controller;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wavemaker.commons.wrapper.StringWrapper;
import com.wavemaker.runtime.data.export.ExportOptions;
import com.wavemaker.runtime.file.manager.ExportedFileManager;
import com.wavemaker.tools.api.core.annotations.WMAccessVisibility;
import com.wavemaker.tools.api.core.models.AccessSpecifier;
import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiOperation;

import com.datatablescenarioswmo.hrdb.service.HrdbQueryExecutorService;
import com.datatablescenarioswmo.hrdb.models.query.*;

@RestController(value = "Hrdb.QueryExecutionController")
@RequestMapping("/hrdb/queryExecutor")
@Api(value = "QueryExecutionController", description = "controller class for query execution")
public class QueryExecutionController {

    private static final Logger LOGGER = LoggerFactory.getLogger(QueryExecutionController.class);

    @Autowired
    private HrdbQueryExecutorService queryService;

    @Autowired
	private ExportedFileManager exportedFileManager;

    @RequestMapping(value = "/queries/HQL_CustomVacationData", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "HQL_CustomVacationData")
    public Page<HqlCustomVacationDataResponse> executeHQL_CustomVacationData(Pageable pageable, HttpServletRequest _request) {
        LOGGER.debug("Executing named query: HQL_CustomVacationData");
        Page<HqlCustomVacationDataResponse> _result = queryService.executeHQL_CustomVacationData(pageable);
        LOGGER.debug("got the result for named query: HQL_CustomVacationData, result:{}", _result);
        return _result;
    }

    @ApiOperation(value = "Returns downloadable file url for query HQL_CustomVacationData")
    @RequestMapping(value = "/queries/HQL_CustomVacationData/export", method = RequestMethod.POST)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public StringWrapper exportHQL_CustomVacationData(@RequestBody ExportOptions exportOptions, Pageable pageable) {
        LOGGER.debug("Exporting named query: HQL_CustomVacationData");

        String exportedFileName = exportOptions.getFileName();
        if(exportedFileName == null || exportedFileName.isEmpty()) {
            exportedFileName = "HQL_CustomVacationData";
        }
        exportedFileName += exportOptions.getExportType().getExtension();

        String exportedUrl = exportedFileManager.registerAndGetURL(exportedFileName,
                        outputStream -> queryService.exportHQL_CustomVacationData( exportOptions, pageable, outputStream));

        return new StringWrapper(exportedUrl);
    }

    @RequestMapping(value = "/queries/SV_DeptData", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "Dept Data")
    public Page<SvDeptDataResponse> executeSV_DeptData(Pageable pageable, HttpServletRequest _request) {
        LOGGER.debug("Executing named query: SV_DeptData");
        Page<SvDeptDataResponse> _result = queryService.executeSV_DeptData(pageable);
        LOGGER.debug("got the result for named query: SV_DeptData, result:{}", _result);
        return _result;
    }

    @ApiOperation(value = "Returns downloadable file url for query SV_DeptData")
    @RequestMapping(value = "/queries/SV_DeptData/export", method = RequestMethod.POST)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public StringWrapper exportSV_DeptData(@RequestBody ExportOptions exportOptions, Pageable pageable) {
        LOGGER.debug("Exporting named query: SV_DeptData");

        String exportedFileName = exportOptions.getFileName();
        if(exportedFileName == null || exportedFileName.isEmpty()) {
            exportedFileName = "SV_DeptData";
        }
        exportedFileName += exportOptions.getExportType().getExtension();

        String exportedUrl = exportedFileManager.registerAndGetURL(exportedFileName,
                        outputStream -> queryService.exportSV_DeptData( exportOptions, pageable, outputStream));

        return new StringWrapper(exportedUrl);
    }

}