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
  selector: 'bh-service',
  templateUrl: './service.template.html',
})
export class serviceComponent {
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
      this.sd_9r7LZ49FHPwoBk18(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_9r7LZ49FHPwoBk18(bh) {
    try {
      bh = this.sd_mQpYhUQqUfKqbBN2(bh);
      //appendnew_next_sd_9r7LZ49FHPwoBk18
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9r7LZ49FHPwoBk18');
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
      return this.errorHandler(bh, e, 'sd_dijaZnYW2uU9RhTs');
    }
  }

  setDataSource_2(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = { dataSource: undefined };
      bh = this.sd_eJuzOUTYKNgXaqdz_2(bh);
      //appendnew_next_setDataSource_2
      return bh.local.dataSource;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_U9sxBpAlEZ5IP4OU');
    }
  }

  //appendnew_flow_serviceComponent_start

  sd_mQpYhUQqUfKqbBN2(bh) {
    try {
      //appendnew_next_sd_mQpYhUQqUfKqbBN2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mQpYhUQqUfKqbBN2');
    }
  }

  sd_eJuzOUTYKNgXaqdz_1(bh) {
    try {
      const page = this.page;
      bh.local.dataSource = new MatTableDataSource([
        {
          parameter: 'Workshop Labour',
          no: 'No',
          response: '',
          yes: 'Yes',
          actions:
            'Have so I was to hell the be when their soft decision-making ',
          date: '',
          documents: '',
        },
        {
          parameter: 'Workshop Display Board',
          no: 'No',
          response: '',
          yes: 'Yes',
          actions:
            'Have so I was to hell the be when their soft decision-making ',
          date: '',
          documents: '',
          color: 'service-upload-icon',
          background: 'grey-background-tr',
        },
        {
          parameter: 'Front Fascia',
          no: 'No',
          response: '',
          yes: 'Yes',
          actions:
            'Have so I was to hell the be when their soft decision-making ',
          date: '',
          documents: '',
        },
        {
          parameter: 'Workshop Labour',
          no: 'No',
          response: '',
          yes: 'Yes',
          actions:
            'Have so I was to hell the be when their soft decision-making ',
          date: '',
          documents: '',
          background: 'grey-background-tr',
        },
        {
          parameter: 'Workshop Labour',
          no: 'No',
          response: '',
          yes: 'Yes',
          actions:
            'Have so I was to hell the be when their soft decision-making ',
          date: '',
          documents: '',
          color: 'service-upload-icon',
        },
      ]);
      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_sd_eJuzOUTYKNgXaqdz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Z8wSeFqPHJBHiYLJ');
    }
  }

  sd_E9QbOlnVduPNV5MO_1(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3iBHP0olaidEqD6E');
    }
  }

  sd_eJuzOUTYKNgXaqdz_2(bh) {
    try {
      const page = this.page;
      bh.local.dataSource = new MatTableDataSource([
        {
          text: 'TSM Feedback',
          para: 'White something here...',
          subpara:
            'Basis of Visit observations: Unique Service initiative, Critical Improvement areas etc...',
          colorGrey: 'serv-table-txt-lightgrey-color',
          darkColor: 'servTableTxtDarkGreyColor',
          fontSize: 'serv-table-txt-fontsize',
        },
        {
          text: 'ASM Feedback',
          para: 'White something here...',
          subpara:
            'Basis of Visit observations: Unique Service initiative, Critical Improvement areas etc...',
          color: 'serv-table-txt-lightgrey-color',
          fontSize: 'serv-table-txt-fontsize',
        },
        {
          text: 'ZSM Feedback',
          para: 'White something here...',
          subpara:
            'Basis of Visit observations: Unique Service initiative, Critical Improvement areas etc...',
          color: 'serv-table-txt-lightgrey-color',
          fontSize: 'serv-table-txt-fontsize',
        },
      ]);
      bh = this.sd_E9QbOlnVduPNV5MO_2(bh);
      //appendnew_next_sd_eJuzOUTYKNgXaqdz_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_x6jf1aBJdLthhGkb');
    }
  }

  sd_E9QbOlnVduPNV5MO_2(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      //appendnew_next_sd_E9QbOlnVduPNV5MO_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_y835IAAuILD3PfpB');
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
  //appendnew_flow_serviceComponent_Catch
}
