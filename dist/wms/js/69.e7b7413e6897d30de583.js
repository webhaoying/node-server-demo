webpackJsonp([69],{1e3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mapDispatchToProps=void 0;var n=a(3),l=function(e){return e&&e.__esModule?e:{default:e}}(n),u=a(161),d=a(1028),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(d);t.mapDispatchToProps=function(e){return(0,u.bindActionCreators)((0,l.default)({},o),e)}},1028:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.GetButtonPower=t.handleWarnexport=t.handleShippedcheck=t.handleGetListDet=t.handleActionOut=t.handleExportList=t.handleSocktOutSZO=t.handleSocktOutExportSZO=t.handleGetStockOutSZO=t.handlChangeCode=t.handleUpdatePrintNum=t.handleCreate=t.handleGetListOM=t.handleGetDetailPrint=t.handleDeClar=t.handleSocktOutExport=t.handleExport=t.handleAllot=t.handleOut=t.handleGetStockOut=t.handleGetDetailRecord=t.handleTabDetail=t.handleGetDetail=t.handleGetList=t.update=void 0;var l=a(3),u=n(l),d=a(292),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(d),r=a(28),c=a(79),i=a(35),s=n(i);t.update=function(e){return{type:o.OUTWAREHOUSELISTWAVE_UPDATE,data:e}},t.handleGetList=function(e,t,a){return function(n){n({type:o.OUTWAREHOUSELISTWAVE_UPDATE,data:{tableLoading:!0}});var l=(0,u.default)({},e.searchParams);l.initDate2&&(l.planSendDate=(0,s.default)(l.initDate2).format("YYYY-MM-DD")),delete l.initDate2;for(var d in l)"[object Object]"===Object.prototype.toString.call(l[d])&&(l[d]=l[d].value);l.initDate&&l.initDate.length&&(l.createTimeBegin=(0,s.default)(l.initDate[0]).format("YYYY-MM-DD"),l.createTimeEnd=(0,s.default)(l.initDate[1]).format("YYYY-MM-DD")),delete l.initDate,e.searchParams=l,t?(0,r.getData)((0,u.default)({api:c.API_WAVES_PAGE},e)).then(function(t){var a=e.searchParams,l=a.page,u=a.size;n({type:o.OUTWAREHOUSELISTWAVE_UPDATE,data:{page:l,size:u,tableLoading:!1,total:t.result.total,selectedRowKeys:[],selectedRows:[],searchResult:t.result.list||[]}})}).catch(function(e){n({type:o.OUTWAREHOUSELISTWAVE_FILE})}):(0,r.getData)((0,u.default)({api:c.API_WAVES_LOADCOUNTS},e)).then(function(t){var l=t.result,d=["0","1","2","3","9"],i="",s={tab0:"",tab1:"",tab2:"",tab3:"",tab9:""};if(l.map(function(e){s["tab"+e.key]=e.value}),a)e.searchParams.status=a,i=a;else{for(var E=0;E<d.length;E++){for(var f=0;f<l.length;f++)if(l[f].key==d[E]&&l[f].value){i=d[E];break}if(i)break}i&&(e.searchParams.status=i)}(0,r.getData)((0,u.default)({api:c.API_WAVES_PAGE},e)).then(function(t){var a=e.searchParams,l=a.page,d=a.size;n({type:o.OUTWAREHOUSELISTWAVE_UPDATE,data:(0,u.default)({page:l,size:d,tableLoading:!1,total:t.result.total,tableActiveKey:i,selectedRowKeys:[],selectedRows:[],searchResult:t.result.list||[]},s)})}).catch(function(e){n({type:o.OUTWAREHOUSELISTWAVE_FILE})})}).catch(function(e){n({type:o.OUTWAREHOUSELISTWAVE_FILE})})}},t.handleGetDetail=function(e){return function(t){t({type:o.OUTWAREHOUSELISTWAVE_UPDATE,data:{deliveryTableLoading:!0}}),(0,r.getData)((0,u.default)({api:c.API_WAVES_PAGE},e)).then(function(e){t({type:o.OUTWAREHOUSELISTWAVE_UPDATE,data:{deliveryTableLoading:!1,modalData:e.result||{}}})}).catch(function(e){t({type:o.OUTWAREHOUSELISTWAVE_FILE})})}},t.handleTabDetail=function(e,t){return function(a){a({type:o.OUTWAREHOUSELISTWAVE_UPDATE,data:{deliveryTableLoading:!0}}),(0,r.getData)((0,u.default)({api:c.API_WAVES_PAGE},e)).then(function(e){var n={deliveryTableLoading:!1,fullModalselectedRowKeys:[],fullModalselectedRows:[],modalData:e.result||{}};t||(n.searchParams2={}),a({type:o.OUTWAREHOUSELISTWAVE_UPDATE,data:n})}).catch(function(e){a({type:o.OUTWAREHOUSELISTWAVE_FILE})})}},t.handleGetDetailRecord=function(e){return function(t){t({type:o.OUTWAREHOUSELISTWAVE_UPDATE,data:{deliveryTableLoading:!0}}),(0,r.getData)((0,u.default)({api:c.API_WAVES_WAVETRACES},e)).then(function(e){t({type:o.OUTWAREHOUSELISTWAVE_UPDATE,data:{deliveryTableLoading:!1,searchResultRecord:e.result||[]}})}).catch(function(e){t({type:o.OUTWAREHOUSELISTWAVE_FILE})})}},t.handleGetStockOut=function(e){return function(t){t({type:o.OUTWAREHOUSELISTWAVE_UPDATE,data:{deliveryTableLoading:!0}}),(0,r.getData)((0,u.default)({api:c.API_WAVES_SHORTAGEDETAILS},e)).then(function(e){t({type:o.OUTWAREHOUSELISTWAVE_UPDATE,data:{deliveryTableLoading:!1,searchResultRecord:e.result||[],selectedRowKeysStock:[],selectedRowssStock:[]}})}).catch(function(e){t({type:o.OUTWAREHOUSELISTWAVE_FILE})})}},t.handleOut=function(e,t,a){return function(n){n({type:o.OUTWAREHOUSELISTWAVE_UPDATE,data:{tableLoading:!0}});var l=c.API_WAVES_PATCH;(0,r.getData)((0,u.default)({api:l},e)).then(function(e){n({type:o.OUTWAREHOUSELISTWAVE_UPDATE,data:{tableLoading:!1,selectedRowKeys:[],selectedRows:[]}}),t&&t(e.result)}).catch(function(e){n({type:o.OUTWAREHOUSELISTWAVE_FILE}),a&&a(e)})}},t.handleAllot=function(e,t,a){return function(n){n({type:o.OUTWAREHOUSELISTWAVE_UPDATE,data:{tableLoading:!0}});var l=c.API_WAVES_DISTRIBUTESTOCKS;(0,r.getData)((0,u.default)({api:l},e)).then(function(e){n({type:o.OUTWAREHOUSELISTWAVE_UPDATE,data:{tableLoading:!1,selectedRowKeys:[],selectedRows:[]}}),t&&t()}).catch(function(e){a&&a(),n({type:o.OUTWAREHOUSELISTWAVE_FILE})})}},t.handleExport=function(e,t){return function(a){(0,r.getData)((0,u.default)({api:c.API_ENTRYORDERS_EXPORT},e)).then(function(e){t&&t()}).catch(function(e){a({type:o.OUTWAREHOUSELISTWAVE_FILE})})}},t.handleSocktOutExport=function(e,t){return function(a){(0,r.getData)((0,u.default)({api:c.API_WAVES_EXPORTSHORTAGEDETAILS_EXPORT},e)).then(function(e){t&&t()}).catch(function(e){a({type:o.OUTWAREHOUSELISTWAVE_FILE})})}},t.handleDeClar=function(e,t,a){return function(n){n({type:o.OUTWAREHOUSELISTWAVE_UPDATE,data:{tableLoading:!0}});var l=c.API_WAVES_LOCALPURCHASE;(0,r.getData)((0,u.default)({api:l},e)).then(function(e){n({type:o.OUTWAREHOUSELISTWAVE_UPDATE,data:{tableLoading:!1,selectedRowKeysStock:[],selectedRowssStock:[]}}),t&&t()}).catch(function(e){a&&a(),n({type:o.OUTWAREHOUSELISTWAVE_FILE})})}},t.handleGetDetailPrint=function(e,t,a){return function(n){n({type:o.OUTWAREHOUSELISTWAVE_UPDATE,data:{printLoading:!0}});var l=1==t?c.API_WAVES_PRINTWAVES_PRINT:c.API_WAVES_PRINTSHIPPEDORDERS_PRINT;1==t&&a&&(l=c.API_PRINTOUTINFOBYORDER),(0,r.getData)((0,u.default)({api:l},e)).then(function(e){n({type:o.OUTWAREHOUSELISTWAVE_UPDATE,data:{printLoading:!1,printData:e.result||[]}})}).catch(function(e){n({type:o.OUTWAREHOUSELISTWAVE_FILE})})}},t.handleGetListOM=function(e){return function(t){t({type:o.OUTWAREHOUSELISTWAVE_UPDATE,data:{deliveryTableLoading:!0}}),(0,r.getData)((0,u.default)({api:c.API_WAVES_SHIPPEDORDERS},e)).then(function(e){t({type:o.OUTWAREHOUSELISTWAVE_UPDATE,data:{deliveryTableLoading:!1,totalOM:e.result.total,selectedRowKeysOM:[],selectedRowsOM:[],searchResultRecord:e.result||[]}})}).catch(function(e){t({type:o.OUTWAREHOUSELISTWAVE_FILE})})}},t.handleCreate=function(e,t){return function(a){a({type:o.OUTWAREHOUSELISTWAVE_UPDATE,data:{modalTuttonLoading:!0}});var n=c.API_WAVES_CREATE_NEW;(0,r.getData)((0,u.default)({api:n},e)).then(function(e){a({type:o.OUTWAREHOUSELISTWAVE_UPDATE,data:{modalTuttonLoading:!1}}),t&&t()}).catch(function(e){a({type:o.OUTWAREHOUSELISTWAVE_FILE})})}},t.handleUpdatePrintNum=function(e,t,a){return function(n){var l=c.API_WAVES_WAVEPRINTTIMES;2==t&&(l=c.API_WAVES_SHIPPEDORDERPRINTTIMES),(0,r.getData)((0,u.default)({api:l},e)).then(function(e){a&&a()}).catch(function(e){n({type:o.OUTWAREHOUSELISTWAVE_FILE})})}},t.handlChangeCode=function(e,t){return function(a){(0,r.getData)((0,u.default)({api:c.API_WAVES_GETSHIPPEDORDER},e)).then(function(e){t&&t(e)}).catch(function(e){a({type:o.OUTWAREHOUSELISTWAVE_FILE})})}},t.handleGetStockOutSZO=function(e,t){return function(a){var n=c.API_WAVES_LOADSHIPPEDSHORTAGEDETAILS;2==t&&(n=c.API_WAVES_ONEKEYSHIPPEDSHORTAGEDETAILS),a({type:o.OUTWAREHOUSELISTWAVE_UPDATE,data:{deliveryTableLoading:!0}}),(0,r.getData)((0,u.default)({api:n},e)).then(function(e){a({type:o.OUTWAREHOUSELISTWAVE_UPDATE,data:{deliveryTableLoading:!1,searchResultRecord:e.result||[]}})}).catch(function(e){a({type:o.OUTWAREHOUSELISTWAVE_FILE})})}},t.handleSocktOutExportSZO=function(e,t,a){return function(n){var l=c.API_WAVES_EXPORTSHIPPEDSHORTAGEDETAILS;2==a&&(l=c.API_WAVES_EXPORTONEKEYSHIPPEDSHORTAGEDETAILS),(0,r.getData)((0,u.default)({api:l},e)).then(function(e){t&&t()}).catch(function(e){n({type:o.OUTWAREHOUSELISTWAVE_FILE})})}},t.handleSocktOutSZO=function(e,t){return function(a){(0,r.getData)((0,u.default)({api:c.API_WAVES_SCARCE_OUT},e)).then(function(e){t&&t()}).catch(function(e){a({type:o.OUTWAREHOUSELISTWAVE_FILE})})}},t.handleExportList=function(e,t){return function(a){(0,r.getData)((0,u.default)({api:c.API_GETSHIPPEDORDERLIST_EXPORTEXCEL},e)).then(function(e){t&&t()}).catch(function(e){a({type:o.OUTWAREHOUSELISTWAVE_FILE})})}},t.handleActionOut=function(e,t){return function(a){(0,r.getData)((0,u.default)({api:c.API_WAVES_ONEKEYSHIPPED},e)).then(function(e){t&&t(e.result)}).catch(function(e){a({type:o.OUTWAREHOUSELISTWAVE_FILE})})}},t.handleGetListDet=function(e,t){return function(a){a({type:o.OUTWAREHOUSELISTWAVE_UPDATE,data:{deliveryTableLoading:!0}});var n=(0,u.default)({},e.searchParams);for(var l in n)"[object Object]"===Object.prototype.toString.call(n[l])&&(n[l]=n[l].value);e.searchParams=n,(0,r.getData)((0,u.default)({api:c.API_WAVES_SELECTWAVEDETAILLIST},e)).then(function(e){var n=t;t.detailList=e.result||[],a({type:o.OUTWAREHOUSELISTWAVE_UPDATE,data:{deliveryTableLoading:!1,fullModalselectedRowKeys:[],fullModalselectedRows:[],modalData:n}})}).catch(function(e){a({type:o.OUTWAREHOUSELISTWAVE_FILE})})}},t.handleShippedcheck=function(e,t){return function(a){(0,r.getData)((0,u.default)({api:c.API_WAVES_BBCORDER_SHIPPEDCHECK},e)).then(function(e){t&&t(e)}).catch(function(e){a({type:o.OUTWAREHOUSELISTWAVE_FILE})})}},t.handleWarnexport=function(e,t){return function(a){(0,r.getData)((0,u.default)({api:c.API_WAVES_BBCORDER_WARNEXPORT},e)).then(function(e){t&&t()}).catch(function(e){a({type:o.OUTWAREHOUSELISTWAVE_FILE})})}},t.GetButtonPower=function(e){return function(t){(0,r.getData)((0,u.default)({api:c.API_GET_MENUS_PERMISSIONS_BANS},e)).then(function(e){var a=e.data,n={};a.map(function(e){n[e.menuCode]=!0}),t({type:o.OUTWAREHOUSELISTWAVE_UPDATE,data:(0,u.default)({},n)})}).catch(function(e){t({type:o.OUTWAREHOUSELISTWAVE_FILE})})}}},1063:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,u,d=a(90),o=n(d),r=a(278),c=n(r),i=a(160),s=n(i),E=a(53),f=n(E),p=a(18),S=n(p),h=a(5),A=n(h),T=a(10),m=n(T),y=a(6),O=n(y),I=a(7),P=n(I),_=a(3),R=n(_);a(91),a(279),a(80),a(54);var D=a(0),L=n(D),W=a(108),U=a(1e3),v=(l=(0,W.connect)(function(e){return(0,R.default)({},e.outWarehouseListWave)},U.mapDispatchToProps))(u=function(e){function t(){(0,A.default)(this,t);var e=(0,O.default)(this,(t.__proto__||(0,S.default)(t)).call(this));return e.handleCloseModal=function(){(0,e.props.update)({isShowReportModal:!1})},e.handleExport=function(){var t=e.props,a=t.handleSocktOutExportSZO,n=t.searchParams,l=t.page,u=t.size,d=t.modalId,o=t.reportModalType;switch(o){case 1:a({searchParams:(0,R.default)({page:l,size:u,waveCode:d},n)},function(){f.default.success("导出成功")},o);break;case 2:a({searchParams:(0,R.default)({page:l,size:u,orderCodeList:d},n)},function(){f.default.success("导出成功")},o)}},e.handleOut=function(){var t=e.props;(0,t.handleSocktOutSZO)({urlParams:[t.modalData.id]},function(){f.default.success("操作成功");var t=e.props,a=t.handleGetList,n=t.searchParams,l=t.page,u=t.size;a({searchParams:(0,R.default)({page:l,size:u},n)}),e.handleCloseModal()})},e.state={},e.columns=[{title:"商品编号",width:150,dataIndex:"productCode",key:"productCode"},{title:"商品名称",width:150,dataIndex:"productName",key:"productName"},{title:"缺货总量",width:100,dataIndex:"shortageTotal",key:"shortageTotal"},{title:"单位",width:100,dataIndex:"unit",key:"unit"},{title:"订单编号",width:150,dataIndex:"outCode",key:"outCode"},{title:"配送地址",width:150,dataIndex:"deliveryAddress",key:"deliveryAddress"},{title:"缺货量",width:100,dataIndex:"shortageQty",key:"shortageQty"},{title:"拣选面",width:150,dataIndex:"storageLocationCode",key:"storageLocationCode"}],e}return(0,P.default)(t,e),(0,m.default)(t,[{key:"componentDidMount",value:function(){console.log(this.props,11),this._getAsyncData()}},{key:"_getAsyncData",value:function(){var e=this.props,t=e.handleGetStockOutSZO,a=e.modalId,n=e.reportModalType;switch(n){case 1:t({searchParams:{waveCode:a}},n);break;case 2:t({searchParams:{orderCodeList:a}},n)}}},{key:"render",value:function(){var e=this.props,t=e.deliveryTableLoading,a=e.searchResultRecord;return L.default.createElement(o.default,{title:"出库缺货报表",visible:!0,onCancel:this.handleCloseModal,footer:null,mask:!1,width:777},L.default.createElement(s.default,{type:"primary",style:{marginRight:"16px"},onClick:this.handleExport},"导出缺货明细"),L.default.createElement("div",{className:"table-group",style:{margin:0}},L.default.createElement(c.default,{rowKey:function(e,t){return t},loading:t,columns:this.columns,scroll:{x:"max-content",y:400},dataSource:a,pagination:!1})))}}]),t}(D.PureComponent))||u;t.default=v,e.exports=t.default},890:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,u,d=a(278),o=n(d),r=a(94),c=n(r),i=a(274),s=n(i),E=a(276),f=n(E),p=a(160),S=n(p),h=a(53),A=n(h),T=a(18),m=n(T),y=a(5),O=n(y),I=a(10),P=n(I),_=a(6),R=n(_),D=a(7),L=n(D),W=a(3),U=n(W),v=a(90),g=n(v);a(279),a(59),a(275),a(277),a(80),a(54),a(91);var C=a(0),k=n(C),b=a(108),V=a(1e3),H=a(280),w=a(958),x=a(1063),M=n(x),N=a(79),G=(g.default.confirm,(l=(0,b.connect)(function(e){return(0,U.default)({},e.outWarehouseListWave,{userLoation:e.userLoation})},V.mapDispatchToProps))(u=function(e){function t(){(0,O.default)(this,t);var e=(0,R.default)(this,(t.__proto__||(0,m.default)(t)).call(this));return e.handleCloseModal=function(){var t=e.props.history;t.length>1?t.goBack():window.close()},e.handleFullOut=function(){var t=e.props,a=t.handleActionOut,n=t.modalData,l=t.handleTabDetail,u=t.match.params,d=t.fullModalselectedRows,o=t.update,r=t.handleShippedcheck,c=[],i=[];d.map(function(e){c.push({orderCode:e.outCode,id:e.id}),i.push(e.outCode)}),d.length?-1!=w.BBC.indexOf(n.businessType)?r({data:{orderCodeList:i}},function(e){var t=e.result;switch(t.result){case 1:a({urlParams:[n.orderCode],data:c},function(e){l({urlParams:[u.id]},!0),A.default.info(""+e.message),e.isShortage&&o({isShowReportModal:!0,modalId:e.failOrderCodeList,reportModalType:2})});break;case 0:o({orderCodeList:i,data:c,isShowBBCModal:!0,BBCmessage:t.message});break;case-1:A.default.error(t.message)}}):a({urlParams:[n.orderCode],data:c},function(e){l({urlParams:[u.id]},!0),A.default.info(""+e.message),e.isShortage&&o({isShowReportModal:!0,modalId:e.failOrderCodeList,reportModalType:2})}):A.default.error("请选择需要出库的出库单")},e.query=function(){var t=e.props,a=t.handleGetListDet,n=t.searchParams2,l=t.modalData,u=t.match.params,d=(0,U.default)({},n);a({searchParams:(0,U.default)({waveId:u.id},d)},l)},e.reset=function(){(0,e.props.update)({searchParams2:{}})},e.state={},e.columns=[{title:"出库单",width:150,dataIndex:"outCode",key:"outCode",render:function(t,a,n){return k.default.createElement("a",{onClick:function(){var t=e.props.modalData,n="/wms/out-warehouse/outWarehouseList/det/";-1!=w.QYG.indexOf(t.businessType)&&(n="/wms/out-warehouse/outWarehouseList/DZdet/"),window.open(""+n+a.outCode)}},t)}},{title:"状态",width:100,dataIndex:"statusDesc",key:"statusDesc"},{title:"电子秤分拣状态",width:100,dataIndex:"dzcStatus",key:"dzcStatus",render:function(e,t,a){return k.default.createElement("span",{className:e?null:"red"},e?"已完成":"未完成")}},{title:"pda分拣状态",width:100,dataIndex:"pdaStatus",key:"pdaStatus",render:function(e,t,a){return k.default.createElement("span",{className:e?null:"red"},e?"已完成":"未完成")}},{title:"创建时间",width:150,dataIndex:"createTime",key:"createTime"},{title:"分配短缺",width:100,dataIndex:"distributeShortageFlagDesc",key:"distributeShortageFlagDesc"},{title:"是否装车",width:100,dataIndex:"entruckingFlag",key:"entruckingFlag",render:function(e,t,a){return e&&Number(e)?"是":"否"}},{title:"门店",width:150,dataIndex:"shopCode",key:"shopCode",render:function(e,t,a){return t.shopCode+" - "+t.shopName}},{title:"客户",width:100,dataIndex:"customerCode",key:"customerCode",render:function(e,t,a){return t.customerCode+" - "+t.customerName}},{title:"站点",width:100,dataIndex:"stationCode",key:"stationCode",render:function(e,t,a){return t.stationCode+" - "+t.stationName}}],e}return(0,L.default)(t,e),(0,P.default)(t,[{key:"componentDidMount",value:function(){this._getAsyncData()}},{key:"_getAsyncData",value:function(){var e=this.props;(0,e.handleTabDetail)({urlParams:[e.match.params.id]})}},{key:"onInputChange",value:function(e){var t=this.props,a=t.searchParams2;(0,t.update)({searchParams2:(0,U.default)({},a,e)})}},{key:"render",value:function(){var e=this,t=this.props,a=t.modalData,n=t.deliveryTableLoading,l=t.fullModalselectedRowKeys,u=t.searchParams2,d=u.dzcStatus,r=u.customerCode,i=u.pdaStatus,E=u.orderCode,p=u.orderStatus,h=t.isShowBBCModal,T=t.update,m=t.handleWarnexport,y=t.orderCodeList,O=t.data,I=t.handleActionOut,P=t.handleTabDetail,_=t.match.params,R=t.BBCmessage,D={selectedRowKeys:l,onChange:function(t,a){(0,e.props.update)({fullModalselectedRowKeys:t,fullModalselectedRows:a})},getCheckboxProps:function(e){return{disabled:3==e.status||!e.dzcStatus||!e.pdaStatus}}};return k.default.createElement("div",{className:"fullOrderDel"},k.default.createElement(g.default,{title:"温馨提示",width:"350px",visible:h,footer:null,onOk:this.handleOk,onCancel:function(){T({isShowBBCModal:!1})}},k.default.createElement("p",{style:{textAlign:"center",color:"red"}},R),k.default.createElement(s.default,{type:"flex",justify:"center"},k.default.createElement(f.default,null,k.default.createElement(S.default,{style:{marginRight:"48px"},onClick:function(){T({isShowBBCModal:!1}),I({urlParams:[a.orderCode],data:O},function(e){P({urlParams:[_.id]},!0),A.default.info(""+e.message),e.isShortage&&T({isShowReportModal:!0,modalId:e.failOrderCodeList,reportModalType:2})})}},"继续出库"),k.default.createElement(S.default,{type:"primary",onClick:function(){T({isShowBBCModal:!1}),m({data:{orderCodeList:y}},function(){A.default.success("操作成功")})}},"下载异常订单")))),k.default.createElement("span",{className:"ant-modal-close-x close",onClick:this.handleCloseModal}),k.default.createElement("div",{className:"content"},this.props.isShowReportModal?k.default.createElement(M.default,null):null,k.default.createElement("div",{className:"header",style:{fontSize:"14px"}},k.default.createElement(s.default,{type:"flex",justify:"start"},k.default.createElement(f.default,{span:24},k.default.createElement(s.default,{type:"flex",justify:"start"},k.default.createElement(f.default,{span:6,style:{fontSize:"12px"}},k.default.createElement(H.CsxSelect,{data:w.PICKSTATE,label:"电子秤分拣状态",selectItem:{data:d,key:"key",valueKey:"value"},onChangeSelect:function(t){e.onInputChange({dzcStatus:t})}})),k.default.createElement(f.default,{span:6},k.default.createElement(H.CsxSelect,{data:w.PICKSTATE,label:"pda分拣状态",selectItem:{data:i,key:"key",valueKey:"value"},onChangeSelect:function(t){e.onInputChange({pdaStatus:t})}})),k.default.createElement(f.default,{span:6},k.default.createElement("div",{className:"commonInput"},k.default.createElement("label",null,"客户编号："),k.default.createElement("div",{className:"box"},k.default.createElement(c.default,{placeholder:"批量查询,请用逗号隔开",value:r,onChange:function(t){e.onInputChange({customerCode:t.target.value})}})))),k.default.createElement(f.default,{span:6},k.default.createElement("div",{className:"commonInput"},k.default.createElement("label",null,"订单编号："),k.default.createElement("div",{className:"box"},k.default.createElement(c.default,{placeholder:"批量查询,请用逗号隔开",value:E,onChange:function(t){e.onInputChange({orderCode:t.target.value})}})))),k.default.createElement(f.default,{span:6},k.default.createElement(H.CsxMultipleSelect,{dateApi:N.API_WAVES_SHIPPEDORDERSTATUS,label:"订单状态",selectItem:{data:p,key:"key",valueKey:["key","value"]},onChangeSelect:function(t){e.onInputChange({orderStatus:t})}})),k.default.createElement(f.default,{span:17},k.default.createElement(s.default,{type:"flex",justify:"end"},k.default.createElement(S.default,{type:"primary",style:{marginRight:"10px"},onClick:this.query},"查询"),k.default.createElement(S.default,{type:"primary",onClick:this.reset},"重置"))),k.default.createElement(f.default,{span:24},k.default.createElement(S.default,{type:"primary",onClick:this.handleFullOut},"一键出库")))),k.default.createElement(f.default,{span:6,className:"delBox"},k.default.createElement("label",null,"波次号："),k.default.createElement("span",null,a.orderCode||"")),k.default.createElement(f.default,{span:6,className:"delBox"},k.default.createElement("label",null,"业务类型："),k.default.createElement("span",null,a.businessTypeDesc||"")),k.default.createElement(f.default,{span:6,className:"delBox"},k.default.createElement("label",null,"门店类型："),k.default.createElement("span",null,a.shopTypeDesc||"")),k.default.createElement(f.default,{span:6,className:"delBox"},k.default.createElement("label",null,"状态："),k.default.createElement("span",null,a.statusDesc||"")),k.default.createElement(f.default,{span:6,className:"delBox"},k.default.createElement("label",null,"创建时间："),k.default.createElement("span",null,a.createTime||"")),k.default.createElement(f.default,{span:6,className:"delBox"},k.default.createElement("label",null,"最新分配时间："),k.default.createElement("span",null,a.distributeTime||"")),k.default.createElement(f.default,{span:6,className:"delBox"},k.default.createElement("label",null,"全量分配："),k.default.createElement("span",null,a.allDistributeFlagDesc||"")),k.default.createElement(f.default,{span:6,className:"delBox"},k.default.createElement("label",null,"波次单打印次数："),k.default.createElement("span",null,a.wavePrintTimes||"")),k.default.createElement(f.default,{span:6,className:"delBox"},k.default.createElement("label",null,"计划发货日期："),k.default.createElement("span",null,a.planSendDate||"")))),k.default.createElement("div",{className:"foot"},k.default.createElement("div",{className:"table-group"},k.default.createElement(o.default,{rowKey:function(e){return e.id},loading:n,columns:this.columns,scroll:{x:"max-content",y:400},dataSource:a.detailList,pagination:!1,rowSelection:D})))))}}]),t}(C.PureComponent))||u);t.default=G,e.exports=t.default},958:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={PICKTYPE:[{key:"",value:"全部"},{key:1,value:"有拣选面"},{key:0,value:"没有拣选面"}],PICKSTATE:[{key:"",value:"全部"},{key:1,value:"已完成"},{key:0,value:"未完成"}],NOSENDFLAG:[{key:"",value:"全部"},{key:"Y",value:"是"},{key:"N",value:"否"}],STATUS:[{key:0,value:"初始"},{key:1,value:"已执行"},{key:2,value:"已取消"},,{key:3,value:"已冲销"}],TYPE_INSURANCE:[{key:30,value:"30天内"},{key:60,value:"60天内"},{key:100,value:"60天以上"}],QYG:["S01","S02","S13","18","19","68"],S01:["S01","18"],BBC:["20","21","22","S03","S04","S05"],RETURNORDER:["05"],BC:["24","25","55"],PICKINGTYPE:[{key:"",value:"全部"},{key:"DZC",value:"电子秤"},{key:"PDA",value:"PDA"}],PROCUREMENT:[{key:"1",value:"M端"},{key:"2",value:"B端"}],SCTYPE:["S06","23","S07","24","S07","24","S08","25","R23","R24","R25","S11","55","S12","58","A23","A24","A25","A55","P06","67","S13","68","69","R68"],GOODSCHANGESTATE:[{key:0,value:"初始"},{key:1,value:"已执行"},{key:2,value:"取消"}],proTypeCatorageList:[{key:2,value:"大类"},{key:3,value:"中类"},{key:4,value:"小类"},{key:5,value:"商品"}],GOODSCHANGECHANGETYPE:[{key:1,value:"子品转母品"},{key:2,value:"母品转子品"},{key:3,value:"等量互转"}]},e.exports=t.default}});
//# sourceMappingURL=69.e7b7413e6897d30de583.js.map