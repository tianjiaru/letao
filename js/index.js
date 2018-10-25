$(function () {
  var myChart = echarts.init(document.getElementById('lt_main'));
  var mmyChart = echarts.init(document.getElementById('lt_mmain'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '2018年注册人数'
            },
            tooltip: {},
            legend: {
                data:['人数']
            },
            xAxis: {
                data: ["1月","2月","3月","4月","5月","6月"]
            },
            yAxis: {},
            series: [{
                name: '人数',
                type: 'bar',
                data: [5000, 2000, 3600, 1000, 1600, 6066]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);



        option = {
          title : {
              text: '热门品牌销售',
              subtext: '2018年11月',
              x:'center'
          },
          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
              orient: 'vertical',
              left: 'left',
              data: ['阿迪','耐克','新百伦','特步','李宁']
          },
          series : [
              {
                  name: '访问来源',
                  type: 'pie',
                  radius : '55%',
                  center: ['50%', '60%'],
                  data:[
                      {value:335, name:'阿迪'},
                      {value:310, name:'耐克'},
                      {value:234, name:'新百伦'},
                      {value:135, name:'特步'},
                      {value:1548, name:'李宁'}
                  ],
                  itemStyle: {
                      emphasis: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }
          ]
      };
      mmyChart.setOption(option);
})