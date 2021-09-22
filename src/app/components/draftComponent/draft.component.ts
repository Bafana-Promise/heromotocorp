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
import { MatPaginator } from '@angular/material/paginator'; //_splitter_
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-draft',
  templateUrl: './draft.template.html',
})
export class draftComponent {
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
      this.sd_PK603FZcUTJxGarf(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_PK603FZcUTJxGarf(bh) {
    try {
      bh = this.sd_cwBh1CQPmrEc0jZc(bh);
      //appendnew_next_sd_PK603FZcUTJxGarf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PK603FZcUTJxGarf');
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
      return this.errorHandler(bh, e, 'sd_VJy08K37Ytxd3rRg');
    }
  }

  //appendnew_flow_draftComponent_start

  sd_cwBh1CQPmrEc0jZc(bh) {
    try {
      //appendnew_next_sd_cwBh1CQPmrEc0jZc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cwBh1CQPmrEc0jZc');
    }
  }

  sd_eJuzOUTYKNgXaqdz_1(bh) {
    try {
      const page = this.page;
      bh.local.dataSource = new MatTableDataSource([
        {
          code: '#225947',
          name: 'Sravani Motors Pvt.Ltd',
          zone: 'North',
          area: 'South-end Circle, Bangalore',
          status: 'draft-table-green-color',
        },
        {
          code: '#223134',
          name: 'Maruthi Motors Pvt.Ltd',
          zone: 'South',
          area: 'JP Nagar, Bangalore',
          status: 'draft-table-orange-color',
        },
        {
          code: '#125947',
          name: 'Banglaore India Motors Pvt.Ltd',
          zone: 'North',
          area: 'Jaya Nagar, Bangalore',
          status: 'draft-table-green-color',
        },
        {
          code: '#325947',
          name: 'Ramakalakshmi Two Wheelars Pvt.Ltd',
          zone: 'East',
          area: 'Maruthi Nagar, Bangalore',
          status: 'draft-table-green-color',
        },
        {
          code: '#435947',
          name: 'Abhijith Motors Pvt.Ltd',
          zone: 'North',
          area: 'Mahalakshmi Layout, Bangalore',
          status: 'draft-table-green-color',
        },
        {
          code: '#224875',
          name: 'Sri Mahalkashmi Motors Pvt.Ltd',
          zone: 'South',
          area: 'Nagasandra, Bangalore',
          status: 'draft-table-green-color',
        },
        {
          code: '#332654',
          name: 'Ronald Motors Pvt.Ltd',
          zone: 'South',
          area: 'Hosur, Bangalore',
          status: 'draft-table-red-color',
        },
        {
          code: '#021548',
          name: 'Whitefield Motors Pvt.Ltd',
          zone: 'North',
          area: 'Whitefield, Bangalore',
          status: 'draft-table-green-color',
        },
      ]);
      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_sd_eJuzOUTYKNgXaqdz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Bp6IhI50FqBAi8g2');
    }
  }

  sd_E9QbOlnVduPNV5MO_1(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8Kqx4He3dmojBE5V');
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
  //appendnew_flow_draftComponent_Catch
}
