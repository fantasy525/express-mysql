/**
 * Created by Administrator on 2017/5/14 0014.
 */
$(function () {
    var showGrade = document.querySelector('#showGrade');
    var data = [
        {'id': '10001', 'value': '2015'},
        {'id': '10002', 'value': '2016'},
        {'id': '10003', 'value': '2017'},
        {'id': '10004', 'value': '2018'},
        {'id': '10005', 'value': '已毕业'},
        {'id': '10006', 'value': '其他'}
    ];
    showGrade.addEventListener('click', function () {
        var gradeId = showGrade.dataset['id'];
        var gradeName = showGrade.dataset['value'];
        var gradeSelect = new IosSelect(1,
            [data],
            {
                title: '年级选择',
                oneLevelId: gradeId,
                itemHeight: 0.7,
                headerHeight: 0.88,
                cssUnit: 'rem',
                callback: function (selectOneObj) {
                    showGrade.value = selectOneObj.value;
                    showGrade.dataset['id'] = selectOneObj.id;
                    showGrade.dataset['value'] = selectOneObj.value;
                }
            });
    });
    //footer
    var address = [
        [
            {
                "集团总部": "北京市海淀区海淀北二街6号中国普天大厦6层100080",
                "咨询电话": "010-62682582"
            },
            {
                "国贸中心": "北京市朝阳区百子湾路32号苹果社区北区3号楼B座1211室 100020",
                "咨询电话": "400-019-0034"
            }
        ],
        [
            {
                "上海总部": "上海市黄浦区黄陂北路227号中区广场7层 200003",
                "咨询电话": "021-63758600"
            },
            {
                "咨询中心": "上海市杨浦区黄兴路2218号合生汇1905室",
                "咨询电话": "021-63758600"
            }
        ],
        [
            {
                "广州总部": "广州市天河区天河北路183号大都会广场46层 510620",
                "咨询电话": "020-38499457"
            }
        ],
        [
            {
                "武汉总部": "湖北武汉市武昌区民主路788号保利大厦副楼18层 430071",
                "咨询电话": "027-87115155"
            }
        ],
        [
            {
                "济南总部": "济南市市中区经四路万达广场B座10层 250000",
                "咨询电话": "0531-67886060"
            }
        ], [
            {
                "深圳总部": "深圳市福田中心区民田路178号华融大厦18楼1801-1804室 518048",
                "咨询电话": "0755-83888266 "
            }
        ],
        [
            {
                "南京总部": "南京市白下区中山南路49号商茂世纪广场15楼A1、A2室 210005",
                "咨询电话": "025-86895859"
            }
        ],
        [
            {
                "成都总部": "四川省成都市锦江区新光华街1号航天科技大厦30层",
                "咨询电话": "028-86784100"
            }
        ], [
            {
                "杭州总部": "杭州市西湖区黄龙路5号黄龙恒励大厦4C 310007",
                "咨询电话": "0571-89986118"
            }
        ],
        [
            {
                "沈阳总部": "沈阳市沈河区惠工街10号卓越大厦3102室(卓展购物中心东侧)",
                "咨询电话": "024-22724398"
            }
        ], [
            {
                "西安总部": "西安市高新区科技路33号高新国际商务中心18层",
                "咨询电话": "029-88827756"
            }
        ], [
            {
                "西安总部": "西安市高新区科技路33号高新国际商务中心18层",
                "咨询电话": "029-88827756"
            }
        ], [
            {
                "长沙总部": "长沙市开福区万达广场A座48层 48003",
                "咨询电话": "0731—85865558"
            }
        ]
    ]
    var footerTabs = $('.footer-tabs span');
    var cityAddress=$('.city-address')[0];

    function renderAddress(index){
        var strHtml;
        cityAddress.innerHTML="";
        for(var m= 0,length=address[index].length;m<length;m++){
            var addObj=address[index][m];

          for(var key in addObj){

              strHtml="<p><i>"+key+":</i><span>"+addObj[key]+"</span></p>"
              cityAddress.innerHTML+=strHtml;
          }
        }
    }
    footerTabs.tap(function(event){
        _this = $(this);
        var current=_this.hasClass('selected');
        _this.addClass('selected').siblings('span').removeClass('selected');
        _this.parent().siblings().find('span').removeClass('selected')
        if(current){
            return false;
        }
        renderAddress(_this.data('id'))
        event.preventDefault();
    })
    //头部动画
    $('.menu-mask').on('tap',function(){
        $('.menu-mask').css({"left":"-99999px","opacity":"0",});
        $('.nav-menu').removeClass('nav-menu-animation')
    })
    $('.header-menu').on('tap',function(){
        $('.menu-mask').css({"left":"0","opacity":"0.5"});
        $('.nav-menu').addClass('nav-menu-animation')
    })
    $(".menu-mask,.nav-menu").on('touchmove',function(e){
        e.preventDefault();  //阻止默认行为
    })
})