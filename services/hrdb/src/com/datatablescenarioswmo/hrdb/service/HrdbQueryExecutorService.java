/*Copyright (c) 2016-2017 wavemaker.com All Rights Reserved.
 This software is the confidential and proprietary information of wavemaker.com You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with wavemaker.com*/
package com.datatablescenarioswmo.hrdb.service;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/

import java.io.OutputStream;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.wavemaker.runtime.data.export.ExportOptions;

import com.datatablescenarioswmo.hrdb.models.query.*;

public interface HrdbQueryExecutorService {

    Page<HqlCustomVacationDataResponse> executeHQL_CustomVacationData(Pageable pageable);

    void exportHQL_CustomVacationData(ExportOptions exportOptions, Pageable pageable, OutputStream outputStream);

    Page<SvDeptDataResponse> executeSV_DeptData(Pageable pageable);

    void exportSV_DeptData(ExportOptions exportOptions, Pageable pageable, OutputStream outputStream);

}