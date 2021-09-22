/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-abhijith',
  templateUrl: './abhijith.template.html',
})
export class abhijithComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_46MqGAoiq4OLPbS9(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_46MqGAoiq4OLPbS9(bh) {
    try {
      bh = this.sd_d32jOi22jtWwhaSV(bh);
      //appendnew_next_sd_46MqGAoiq4OLPbS9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_46MqGAoiq4OLPbS9');
    }
  }

  setDataSource_1(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = { dataSource: undefined };
      bh = this.sd_eJuzOUTYKNgXaqdz_1(bh);
      //appendnew_next_setDataSource_1
      return bh.local.dataSource;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AjMBFMFg0pyrTnkM');
    }
  }

  //appendnew_flow_abhijithComponent_start

  sd_d32jOi22jtWwhaSV(bh) {
    try {
      //appendnew_next_sd_d32jOi22jtWwhaSV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_d32jOi22jtWwhaSV');
    }
  }

  sd_eJuzOUTYKNgXaqdz_1(bh) {
    try {
      const page = this.page;
      bh.local.dataSource = new MatTableDataSource([
        {
          month: 'December',
          marks: '100',
          progress: 'abhijith-background-colorred',
          percentage: '100%',
          status: 'Completed',
          action: '',
          Img: 'tree (2).png',
          height: 'abhijith-transperant-img',
          color: '',
        },
        {
          month: 'January',
          marks: '120',
          progress: 'abhijith-background-colorred',
          percentage: '100%',
          status: 'Completed',
          action: '',
          Img: 'tree (2).png',
          height: 'abhijith-transperant-img',
          color: '',
        },
        {
          month: 'December',
          marks: '100',
          progress: 'abhijith-background-colorred',
          percentage: '100%',
          status: 'Completed',
          action: '',
          Img: 'tree (2).png',
          height: 'abhijith-transperant-img',
          color: '',
        },
        {
          month: 'January',
          marks: '120',
          progress: 'abhijith-background-colorred',
          percentage: '100%',
          status: 'Completed',
          action: '',
          Img: 'tree (2).png',
          height: 'abhijith-transperant-img',
          color: '',
        },
        {
          month: 'February',
          marks: '00',
          progress: 'abhijith-background-colorblack',
          percentage: '0%',
          status: 'Expired',
          action: '',
          Img: 'tree (2).png',
          height: 'abhijith-transperant-img',
          color: '',
        },
        {
          month: 'March',
          marks: '13',
          redpro: 'abhijith-progress-37red',
          blackpro: 'abhijith-background-colorblack',
          position: 'abhijith-position',
          percentage: '37%',
          status: 'Active',
          Img: 'red.svg',
          color: '',
        },
      ]);
      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_sd_eJuzOUTYKNgXaqdz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oxig947qtKcXkfo3');
    }
  }

  sd_E9QbOlnVduPNV5MO_1(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QZBPf5ZB8PYBMFzu');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_abhijithComponent_Catch
}
