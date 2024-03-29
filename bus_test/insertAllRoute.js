const Pool = require('pg').Pool;

// Connect to database
const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "ar_bus_test"
});

let jsonFile = {
  "VersionID": 2180,
  "UpdateTime": "2022-08-20T00:00:00+08:00",
  "UpdateInterval": 14400,
  "SrcUpdateTime": "2022-08-20T01:05:03+08:00",
  "SrcUpdateInterval": 86400,
  "AuthorityCode": "TNN",
  "Routes": [
  {
    "RouteUID": "TNN10019",
    "RouteID": "10019",
    "RouteName": {
      "Zh_tw": "19",
      "En": "19"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10001",
        "OperatorName": {
          "Zh_tw": "府城客運",
          "En": "Tainan City Bus"
        },
        "OperatorCode": "TainanCityBus",
        "OperatorNo": "0803"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "全票18元、半票9元",
      "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9."
    },
    "DepartureStopName": {
      "Zh_tw": "安平",
      "En": "Anping"
    },
    "DestinationStopName": {
      "Zh_tw": "大灣",
      "En": "Dawan"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "16928",
      "StopName": {
        "Zh_tw": "臺南海事",
        "En": "National Tainan Senior Marine Fishery Vocational School"
      }
    },
    "EndStop": {
      "StopID": "16107",
      "StopName": {
        "Zh_tw": "大灣高中",
        "En": "Dawan Senior High School"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10019",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10019",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10019.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10019",
    "RouteDistance": 17
  },
  {
    "RouteUID": "TNN10020",
    "RouteID": "10020",
    "RouteName": {
      "Zh_tw": "20",
      "En": "20"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10001",
        "OperatorName": {
          "Zh_tw": "府城客運",
          "En": "Tainan City Bus"
        },
        "OperatorCode": "TainanCityBus",
        "OperatorNo": "0803"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "一段票18元，二段票30元",
      "En": "One-section fare: NT$18. Two-section fare: NT$30."
    },
    "DepartureStopName": {
      "Zh_tw": "南紡購物中心",
      "En": "T.S. Mall"
    },
    "DestinationStopName": {
      "Zh_tw": "海東國小",
      "En": "Haidong Elementary School"
    },
    "FareBufferZoneDescription": {
      "Zh_tw": "分段點為「塭南里」，並於「安南醫院」、「和順國中」、「塭南里」、「安昌街口」及「嘉綠寶社區」設置緩衝區。",
      "En": "Fare buffer stops: An-nan Hospital, HoShun Junior High School, Wunnan Village, An-Chang St. Intersec"
    },
    "StartStop": {
      "StopID": "16557",
      "StopName": {
        "Zh_tw": "南紡購物中心(東光路)",
        "En": "T.S. Mall(Dongguang Rd.)"
      }
    },
    "EndStop": {
      "StopID": "16692",
      "StopName": {
        "Zh_tw": "海東國小",
        "En": "Haidong Elementary School"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10020",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10020",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10020.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10020",
    "RouteDistance": 30.3
  },
  {
    "RouteUID": "TNN10021",
    "RouteID": "10021",
    "RouteName": {
      "Zh_tw": "21",
      "En": "21"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10001",
        "OperatorName": {
          "Zh_tw": "府城客運",
          "En": "Tainan City Bus"
        },
        "OperatorCode": "TainanCityBus",
        "OperatorNo": "0803"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "全票18元、半票9元",
      "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9."
    },
    "DepartureStopName": {
      "Zh_tw": "火車南站",
      "En": "Tainan Train Station(South)"
    },
    "DestinationStopName": {
      "Zh_tw": "永康工業區",
      "En": "Yongkang Industrial Park"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "8755",
      "StopName": {
        "Zh_tw": "臺南火車站(南站)",
        "En": "Tainan Train Station(South)"
      }
    },
    "EndStop": {
      "StopID": "16233",
      "StopName": {
        "Zh_tw": "永康休閒育樂中心",
        "En": "Yongkang Recreation Center"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10021",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10021",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10021.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10021",
    "RouteDistance": 31.1
  },
  {
    "RouteUID": "TNN10160",
    "RouteID": "10160",
    "RouteName": {
      "Zh_tw": "1",
      "En": "1"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10001",
        "OperatorName": {
          "Zh_tw": "府城客運",
          "En": "Tainan City Bus"
        },
        "OperatorCode": "TainanCityBus",
        "OperatorNo": "0803"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "一段票18元，二段票30元",
      "En": "One-section fare: NT$18. Two-section fare: NT$30."
    },
    "DepartureStopName": {
      "Zh_tw": "火車南站",
      "En": "Tainan Train Station(South)"
    },
    "DestinationStopName": {
      "Zh_tw": "茄萣",
      "En": "Cieding"
    },
    "FareBufferZoneDescription": {
      "Zh_tw": "分段點為「南萣橋南」，並於「同安里」、「南萣橋北」、「南萣橋南」、「白砂崙」及「白砂崙廟口」設置緩衝區。",
      "En": "Fare buffer stops: Tongan Village, North of Nan-Ding Bridge, South of Nan-Ding Bridge, Bai-Sha-Lun,B"
    },
    "StartStop": {
      "StopID": "10013",
      "StopName": {
        "Zh_tw": "臺南火車站(南站)",
        "En": "Tainan Train Station(South)"
      }
    },
    "EndStop": {
      "StopID": "11098",
      "StopName": {
        "Zh_tw": "興達遠洋漁港",
        "En": "Singdayuanyang Fish Harbor"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10160",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10160",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10160.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10160",
    "RouteDistance": 15
  },
  {
    "RouteUID": "TNN10161",
    "RouteID": "10161",
    "RouteName": {
      "Zh_tw": "18",
      "En": "18"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10001",
        "OperatorName": {
          "Zh_tw": "府城客運",
          "En": "Tainan City Bus"
        },
        "OperatorCode": "TainanCityBus",
        "OperatorNo": "0803"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "全票18元、半票9元",
      "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9."
    },
    "DepartureStopName": {
      "Zh_tw": "台南站",
      "En": "Tainan(Simen Rd.＆ Wufei St.)"
    },
    "DestinationStopName": {
      "Zh_tw": "塭南里",
      "En": "Wunnan Village"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "8914",
      "StopName": {
        "Zh_tw": "國民路",
        "En": "Guomin Rd."
      }
    },
    "EndStop": {
      "StopID": "14365",
      "StopName": {
        "Zh_tw": "臺灣歷史博物館(慶和路)",
        "En": "National Museum of Taiwan History(Cinghe Rd.)"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10161",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10161",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10161.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10161",
    "RouteDistance": 15.2
  },
  {
    "RouteUID": "TNN10162",
    "RouteID": "10162",
    "RouteName": {
      "Zh_tw": "2",
      "En": "2"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10001",
        "OperatorName": {
          "Zh_tw": "府城客運",
          "En": "Tainan City Bus"
        },
        "OperatorCode": "TainanCityBus",
        "OperatorNo": "0803"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "全票18元、半票9元",
      "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9."
    },
    "DepartureStopName": {
      "Zh_tw": "崑山科大",
      "En": "KunShan Univ."
    },
    "DestinationStopName": {
      "Zh_tw": "安平",
      "En": "Anping"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "9001",
      "StopName": {
        "Zh_tw": "崑山科大",
        "En": "Kun Shan University"
      }
    },
    "EndStop": {
      "StopID": "10270",
      "StopName": {
        "Zh_tw": "三鯤鯓",
        "En": "SanKunShen"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10162",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10162",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10162.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10162",
    "RouteDistance": 14.5
  },
  {
    "RouteUID": "TNN10163",
    "RouteID": "10163",
    "RouteName": {
      "Zh_tw": "3",
      "En": "3"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10001",
        "OperatorName": {
          "Zh_tw": "府城客運",
          "En": "Tainan City Bus"
        },
        "OperatorCode": "TainanCityBus",
        "OperatorNo": "0803"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "全票18元、半票9元",
      "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9."
    },
    "DepartureStopName": {
      "Zh_tw": "海東國小",
      "En": "Haidong Elementary School"
    },
    "DestinationStopName": {
      "Zh_tw": "德高國小",
      "En": "Degao Elementary School"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "10019",
      "StopName": {
        "Zh_tw": "海東國小",
        "En": "Haidong Elementary School"
      }
    },
    "EndStop": {
      "StopID": "16496",
      "StopName": {
        "Zh_tw": "復興國中",
        "En": "Fusing Junior High School"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10163",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10163",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10163.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10163",
    "RouteDistance": 16.9
  },
  {
    "RouteUID": "TNN10164",
    "RouteID": "10164",
    "RouteName": {
      "Zh_tw": "5",
      "En": "5"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10001",
        "OperatorName": {
          "Zh_tw": "府城客運",
          "En": "Tainan City Bus"
        },
        "OperatorCode": "TainanCityBus",
        "OperatorNo": "0803"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "全票18元、半票9元",
      "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9."
    },
    "DepartureStopName": {
      "Zh_tw": "桂田酒店",
      "En": "Queena Plaza Hotel"
    },
    "DestinationStopName": {
      "Zh_tw": "市立醫院、大甲里",
      "En": "Tainan Municipal Hospital、Dajia Vil."
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "16283",
      "StopName": {
        "Zh_tw": "桂田酒店",
        "En": "Queena Plaza Hotel"
      }
    },
    "EndStop": {
      "StopID": "15916",
      "StopName": {
        "Zh_tw": "大甲里",
        "En": "Dajia Vil."
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10164",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10164",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10164.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10164",
    "RouteDistance": 20.3
  },
  {
    "RouteUID": "TNN10165",
    "RouteID": "10165",
    "RouteName": {
      "Zh_tw": "6",
      "En": "6"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10001",
        "OperatorName": {
          "Zh_tw": "府城客運",
          "En": "Tainan City Bus"
        },
        "OperatorCode": "TainanCityBus",
        "OperatorNo": "0803"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "全票18元、半票9元",
      "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9."
    },
    "DepartureStopName": {
      "Zh_tw": "仁德轉運站",
      "En": "Rende Bus Station"
    },
    "DestinationStopName": {
      "Zh_tw": "新興國宅",
      "En": "Sinsing Public Housing"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "16984",
      "StopName": {
        "Zh_tw": "仁德轉運站",
        "En": "Rende Bus Station"
      }
    },
    "EndStop": {
      "StopID": "11146",
      "StopName": {
        "Zh_tw": "龍崗國小",
        "En": "LongGang Elementary School"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10165",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10165",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10165.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10165",
    "RouteDistance": 14.4
  },
  {
    "RouteUID": "TNN10166",
    "RouteID": "10166",
    "RouteName": {
      "Zh_tw": "7",
      "En": "7"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10001",
        "OperatorName": {
          "Zh_tw": "府城客運",
          "En": "Tainan City Bus"
        },
        "OperatorCode": "TainanCityBus",
        "OperatorNo": "0803"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "全票18元、半票9元",
      "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9."
    },
    "DepartureStopName": {
      "Zh_tw": "臺南火車站",
      "En": "Tainan Train Station"
    },
    "DestinationStopName": {
      "Zh_tw": "台糖安南學苑",
      "En": "An-nan Institute"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "10029",
      "StopName": {
        "Zh_tw": "臺南火車站(南站)",
        "En": "Tainan Train Station(South)"
      }
    },
    "EndStop": {
      "StopID": "11135",
      "StopName": {
        "Zh_tw": "台糖安南學苑",
        "En": "An-nan Institute"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10166",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10166",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10166.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10166",
    "RouteDistance": 17.9
  },
  {
    "RouteUID": "TNN10167",
    "RouteID": "10167",
    "RouteName": {
      "Zh_tw": "9",
      "En": "9"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10001",
        "OperatorName": {
          "Zh_tw": "府城客運",
          "En": "Tainan City Bus"
        },
        "OperatorCode": "TainanCityBus",
        "OperatorNo": "0803"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "全票18元、半票9元",
      "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9."
    },
    "DepartureStopName": {
      "Zh_tw": "臺南火車站",
      "En": "Tainan Train Station"
    },
    "DestinationStopName": {
      "Zh_tw": "公親里",
      "En": "Gongcin Village"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "10032",
      "StopName": {
        "Zh_tw": "臺南火車站(南站)",
        "En": "Tainan Train Station(South)"
      }
    },
    "EndStop": {
      "StopID": "15846",
      "StopName": {
        "Zh_tw": "北極殿",
        "En": "Beiji Temple"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10167",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10167",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10167.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10167",
    "RouteDistance": 12.9
  },
  {
    "RouteUID": "TNN10168",
    "RouteID": "10168",
    "RouteName": {
      "Zh_tw": "10",
      "En": "10"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10001",
        "OperatorName": {
          "Zh_tw": "府城客運",
          "En": "Tainan City Bus"
        },
        "OperatorCode": "TainanCityBus",
        "OperatorNo": "0803"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "二段票，每段票為 18 元，跨分段點時一次性付款為 30元",
      "En": "One-section fare: NT$18. Two-section fare: NT$30."
    },
    "DepartureStopName": {
      "Zh_tw": "臺南火車站",
      "En": "Tainan Train Station"
    },
    "DestinationStopName": {
      "Zh_tw": "鹿耳門",
      "En": "Luermen Matsu Temple"
    },
    "FareBufferZoneDescription": {
      "Zh_tw": "分段點：「海東國小」",
      "En": "Fare buffer stops: Haidong Elementary School"
    },
    "StartStop": {
      "StopID": "14030",
      "StopName": {
        "Zh_tw": "臺南火車站(南站)",
        "En": "Tainan Train Station(South)"
      }
    },
    "EndStop": {
      "StopID": "11145",
      "StopName": {
        "Zh_tw": "鹿耳門天后宮",
        "En": "Luermen Matsu Temple"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10168",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10168",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10168.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10168",
    "RouteDistance": 23.7
  },
  {
    "RouteUID": "TNN10169",
    "RouteID": "10169",
    "RouteName": {
      "Zh_tw": "11",
      "En": "11"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10001",
        "OperatorName": {
          "Zh_tw": "府城客運",
          "En": "Tainan City Bus"
        },
        "OperatorCode": "TainanCityBus",
        "OperatorNo": "0803"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "二段票，每段票為 18 元，跨分段點時一次性付款為 30元",
      "En": "One-section fare: NT$18. Two-section fare: NT$30."
    },
    "DepartureStopName": {
      "Zh_tw": "大成路口",
      "En": "Dacheng Rd. and Simen Rd."
    },
    "DestinationStopName": {
      "Zh_tw": "城西里",
      "En": "Chengsi Village"
    },
    "FareBufferZoneDescription": {
      "Zh_tw": "分段點：「海東國小」",
      "En": "Fare buffer stops: Haidong Elementary School"
    },
    "StartStop": {
      "StopID": "14296",
      "StopName": {
        "Zh_tw": "大成路口",
        "En": "Dacheng Rd. ＆ Simen Rd."
      }
    },
    "EndStop": {
      "StopID": "10700",
      "StopName": {
        "Zh_tw": "城西里",
        "En": "Chengsi Village"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10169",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10169",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10169.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10169",
    "RouteDistance": 24.6
  },
  {
    "RouteUID": "TNN10170",
    "RouteID": "10170",
    "RouteName": {
      "Zh_tw": "14",
      "En": "14"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10001",
        "OperatorName": {
          "Zh_tw": "府城客運",
          "En": "Tainan City Bus"
        },
        "OperatorCode": "TainanCityBus",
        "OperatorNo": "0803"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "全票18元、半票9元",
      "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9."
    },
    "DepartureStopName": {
      "Zh_tw": "臺南火車站",
      "En": "Tainan Train Station"
    },
    "DestinationStopName": {
      "Zh_tw": "億載金城",
      "En": "Eternal Golden Castle"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "9140",
      "StopName": {
        "Zh_tw": "臺南火車站(南站)",
        "En": "Tainan Train Station(South)"
      }
    },
    "EndStop": {
      "StopID": "9181",
      "StopName": {
        "Zh_tw": "億載金城",
        "En": "Eternal Golden Castle"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10170",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10170",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10170.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10170",
    "RouteDistance": 9
  },
  {
    "RouteUID": "TNN10262",
    "RouteID": "10262",
    "RouteName": {
      "Zh_tw": "H31",
      "En": "H31"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": true,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": true,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "免費接駁路線",
      "En": "Free Shuttle Bus"
    },
    "DepartureStopName": {
      "Zh_tw": "市政府",
      "En": "Tainan City Hall"
    },
    "DestinationStopName": {
      "Zh_tw": "高鐵台南站",
      "En": "THSR Tainan Station"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "14178",
      "StopName": {
        "Zh_tw": "原住民文化會館",
        "En": "The Indigenous Culture Museum"
      }
    },
    "EndStop": {
      "StopID": "11016",
      "StopName": {
        "Zh_tw": "高鐵台南站",
        "En": "THSR Tainan Station"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10262",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10262",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10262.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10262",
    "RouteDistance": 24.1
  },
  {
    "RouteUID": "TNN10265",
    "RouteID": "10265",
    "RouteName": {
      "Zh_tw": "H62",
      "En": "H62"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": true,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": true,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "免費接駁路線",
      "En": "Free Shuttle Bus"
    },
    "DepartureStopName": {
      "Zh_tw": "奇美醫院",
      "En": "Chi Mei Medical Center"
    },
    "DestinationStopName": {
      "Zh_tw": "高鐵台南站",
      "En": "THSR Tainan Station"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "20311",
      "StopName": {
        "Zh_tw": "桂田酒店",
        "En": "Queena Plaza Hotel"
      }
    },
    "EndStop": {
      "StopID": "11065",
      "StopName": {
        "Zh_tw": "高鐵台南站",
        "En": "THSR Tainan Station"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10265",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10265",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10265.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10265",
    "RouteDistance": 21.5
  },
  {
    "RouteUID": "TNN1033",
    "RouteID": "1033",
    "RouteName": {
      "Zh_tw": "33 關子嶺線",
      "En": "33 Guanzihling"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": true,
      "IsTourBus": true,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "高鐵嘉義站",
      "En": "THSR Chiayi Station"
    },
    "DestinationStopName": {
      "Zh_tw": "關子嶺",
      "En": "Guanzihling"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "17184",
      "StopName": {
        "Zh_tw": "高鐵嘉義站",
        "En": "THSR Chiayi Station"
      }
    },
    "EndStop": {
      "StopID": "17200",
      "StopName": {
        "Zh_tw": "關子嶺",
        "En": "Guanzihling"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1033",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1033",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1033.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1033",
    "RouteDistance": 35.6
  },
  {
    "RouteUID": "TNN10450",
    "RouteID": "10450",
    "RouteName": {
      "Zh_tw": "0左",
      "En": "0L"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10001",
        "OperatorName": {
          "Zh_tw": "府城客運",
          "En": "Tainan City Bus"
        },
        "OperatorCode": "TainanCityBus",
        "OperatorNo": "0803"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "全票18元、半票9元",
      "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9."
    },
    "DepartureStopName": {
      "Zh_tw": "火車北站",
      "En": "Tainan Train Station(North)"
    },
    "DestinationStopName": {
      "Zh_tw": "火車北站",
      "En": "Tainan Train Station(North)"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "13767",
      "StopName": {
        "Zh_tw": "臺南火車站(北站)",
        "En": "Tainan Train Station(North)"
      }
    },
    "EndStop": {
      "StopID": "13772",
      "StopName": {
        "Zh_tw": "臺南火車站(北站)",
        "En": "Tainan Train Station(North)"
      }
    },
    "IsCircular": true,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10450",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10450",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10450.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10450",
    "RouteDistance": 6.9
  },
  {
    "RouteUID": "TNN10451",
    "RouteID": "10451",
    "RouteName": {
      "Zh_tw": "0右",
      "En": "0R"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10001",
        "OperatorName": {
          "Zh_tw": "府城客運",
          "En": "Tainan City Bus"
        },
        "OperatorCode": "TainanCityBus",
        "OperatorNo": "0803"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "全票18元、半票9元",
      "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9."
    },
    "DepartureStopName": {
      "Zh_tw": "火車南站",
      "En": "Tainan Train Station(South)"
    },
    "DestinationStopName": {
      "Zh_tw": "火車南站",
      "En": "Tainan Train Station(South)"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "13706",
      "StopName": {
        "Zh_tw": "臺南火車站(南站)",
        "En": "Tainan Train Station(South)"
      }
    },
    "EndStop": {
      "StopID": "13736",
      "StopName": {
        "Zh_tw": "臺南火車站(南站)",
        "En": "Tainan Train Station(South)"
      }
    },
    "IsCircular": true,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10451",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10451",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10451.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10451",
    "RouteDistance": 6.9
  },
  {
    "RouteUID": "TNN10452",
    "RouteID": "10452",
    "RouteName": {
      "Zh_tw": "15",
      "En": "15"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10001",
        "OperatorName": {
          "Zh_tw": "府城客運",
          "En": "Tainan City Bus"
        },
        "OperatorCode": "TainanCityBus",
        "OperatorNo": "0803"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "全票18元、半票9元",
      "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9."
    },
    "DepartureStopName": {
      "Zh_tw": "奇美醫院",
      "En": "Chi Mei Medical Center"
    },
    "DestinationStopName": {
      "Zh_tw": "大成國中",
      "En": "Dacheng Junior High School"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "13773",
      "StopName": {
        "Zh_tw": "奇美醫院",
        "En": "Chi Mei Medical Center"
      }
    },
    "EndStop": {
      "StopID": "14298",
      "StopName": {
        "Zh_tw": "大成路口",
        "En": "Dacheng Rd. ＆ Simen Rd."
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10452",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10452",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10452.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10452",
    "RouteDistance": 10.4
  },
  {
    "RouteUID": "TNN1055",
    "RouteID": "1055",
    "RouteName": {
      "Zh_tw": "菱波官田線",
      "En": "55 Lingpo Guantian"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": true,
      "IsTourBus": true,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": ""
    },
    "DepartureStopName": {
      "Zh_tw": "新營站",
      "En": "Sinying"
    },
    "DestinationStopName": {
      "Zh_tw": "南科考古館",
      "En": "Museum of Archaeology，Tainan Branch of NMP"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "24050",
      "StopName": {
        "Zh_tw": "新營站",
        "En": "Sinying Station"
      }
    },
    "EndStop": {
      "StopID": "24102",
      "StopName": {
        "Zh_tw": "南科考古館(南科商場)",
        "En": "Southern Taiwan Science Park"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1055",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1055",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1055.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1055",
    "RouteDistance": 66.3
  },
  {
    "RouteUID": "TNN1061",
    "RouteID": "1061",
    "RouteName": {
      "Zh_tw": "61 西濱快線",
      "En": "61 West Coast Shuttle Bus"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": true,
      "IsTourBus": true,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "新營站",
      "En": "Sinying Bus Station"
    },
    "DestinationStopName": {
      "Zh_tw": "臺灣鹽博物館",
      "En": "Taiwan Salt Museum"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "21660",
      "StopName": {
        "Zh_tw": "新營站",
        "En": "Sinying Station"
      }
    },
    "EndStop": {
      "StopID": "21696",
      "StopName": {
        "Zh_tw": "臺灣鹽博物館",
        "En": "Taiwan Salt Museum"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1061",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1061",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1061.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1061",
    "RouteDistance": 73
  },
  {
    "RouteUID": "TNN1070",
    "RouteID": "1070",
    "RouteName": {
      "Zh_tw": "70",
      "En": "70"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "全票18元、半票9元",
      "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9."
    },
    "DepartureStopName": {
      "Zh_tw": "70左",
      "En": "70 Left"
    },
    "DestinationStopName": {
      "Zh_tw": "70右",
      "En": "70 Right"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "20840",
      "StopName": {
        "Zh_tw": "永華市政中心(府前路)",
        "En": "Tainan City Hall(Fu-Cian Rd.)"
      }
    },
    "EndStop": {
      "StopID": "20934",
      "StopName": {
        "Zh_tw": "永華市政中心(府前路)",
        "En": "Tainan City Hall(Fu-Cian Rd.)"
      }
    },
    "IsCircular": true,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1070",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1070",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1070.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1070",
    "RouteDistance": 30
  },
  {
    "RouteUID": "TNN1077",
    "RouteID": "1077",
    "RouteName": {
      "Zh_tw": "77",
      "En": "77"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10008",
        "OperatorName": {
          "Zh_tw": "四方電巴",
          "En": "Si Fang Bus"
        },
        "OperatorCode": "SiFangBus",
        "OperatorNo": "0503"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "全票18元、半票9元",
      "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9."
    },
    "DepartureStopName": {
      "Zh_tw": "原住民文化會館",
      "En": "Indigenous Culture Museum"
    },
    "DestinationStopName": {
      "Zh_tw": "南紡購物中心",
      "En": "T.S. Mall"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "16609",
      "StopName": {
        "Zh_tw": "原住民文化會館",
        "En": "The Indigenous Culture Museum"
      }
    },
    "EndStop": {
      "StopID": "16635",
      "StopName": {
        "Zh_tw": "南紡購物中心(東光路)",
        "En": "T.S. Mall(Dongguang Rd.)"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1077",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1077",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1077.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1077",
    "RouteDistance": 11.2
  },
  {
    "RouteUID": "TNN1088",
    "RouteID": "1088",
    "RouteName": {
      "Zh_tw": "88",
      "En": "88"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10001",
        "OperatorName": {
          "Zh_tw": "府城客運",
          "En": "Tainan City Bus"
        },
        "OperatorCode": "TainanCityBus",
        "OperatorNo": "0803"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": true,
      "IsTourBus": true,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "全票18元、半票9元",
      "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9."
    },
    "DepartureStopName": {
      "Zh_tw": "火車南站",
      "En": "Tainan Train Station(South)"
    },
    "DestinationStopName": {
      "Zh_tw": "火車南站",
      "En": "Tainan Train Station(South)"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "21168",
      "StopName": {
        "Zh_tw": "臺南火車站(南站)",
        "En": "Tainan Train Station(South)"
      }
    },
    "EndStop": {
      "StopID": "21181",
      "StopName": {
        "Zh_tw": "臺南火車站(南站)",
        "En": "Tainan Train Station(South)"
      }
    },
    "IsCircular": true,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1088",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1088",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1088.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1088",
    "RouteDistance": 8.5
  },
  {
    "RouteUID": "TNN1099",
    "RouteID": "1099",
    "RouteName": {
      "Zh_tw": "99",
      "En": "99"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10001",
        "OperatorName": {
          "Zh_tw": "府城客運",
          "En": "Tainan City Bus"
        },
        "OperatorCode": "TainanCityBus",
        "OperatorNo": "0803"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": true,
      "IsTourBus": true,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "二段票，每段票為 18 元，跨分段點時一次性付款為 36元",
      "En": "One-section fare: NT$18. Two-section fare: NT$36"
    },
    "DepartureStopName": {
      "Zh_tw": "臺南轉運站",
      "En": "Tainan Bus Station"
    },
    "DestinationStopName": {
      "Zh_tw": "七股鹽山",
      "En": "Cigu Salt Mountain"
    },
    "FareBufferZoneDescription": {
      "Zh_tw": "分段點為「觀夕平台」",
      "En": "Fare buffer stops: Sunset Platform"
    },
    "StartStop": {
      "StopID": "21200",
      "StopName": {
        "Zh_tw": "臺南轉運站",
        "En": "Tainan Bus Station"
      }
    },
    "EndStop": {
      "StopID": "21230",
      "StopName": {
        "Zh_tw": "黑面琵鷺賞鳥亭",
        "En": "Black-faced Spoonbill Bird-Watching Pavilion"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1099",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1099",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1099.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1099",
    "RouteDistance": 45.9
  },
  {
    "RouteUID": "TNN1100",
    "RouteID": "1100",
    "RouteName": {
      "Zh_tw": "綠幹線",
      "En": "Green"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": true,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "臺南",
      "En": "Tainan"
    },
    "DestinationStopName": {
      "Zh_tw": "玉井",
      "En": "Yujing"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "4483",
      "StopName": {
        "Zh_tw": "臺南轉運站",
        "En": "Tainan Bus Station"
      }
    },
    "EndStop": {
      "StopID": "4541",
      "StopName": {
        "Zh_tw": "玉井站",
        "En": "Yujing Bus Station"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1100",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1100",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1100.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1100",
    "RouteDistance": 42.4
  },
  {
    "RouteUID": "TNN1101",
    "RouteID": "1101",
    "RouteName": {
      "Zh_tw": "綠1",
      "En": "G1"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "新化",
      "En": "Sinhua"
    },
    "DestinationStopName": {
      "Zh_tw": "善化",
      "En": "Shanhua"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "4601",
      "StopName": {
        "Zh_tw": "新化站",
        "En": "Sinhua Bus Station"
      }
    },
    "EndStop": {
      "StopID": "4627",
      "StopName": {
        "Zh_tw": "善化轉運站",
        "En": "Shanhua Bus Station"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1101",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1101",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1101.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1101",
    "RouteDistance": 13.5
  },
  {
    "RouteUID": "TNN1102",
    "RouteID": "1102",
    "RouteName": {
      "Zh_tw": "綠2",
      "En": "G2"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "新化",
      "En": "Sinhua"
    },
    "DestinationStopName": {
      "Zh_tw": "山上",
      "En": "Shanshang"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "4655",
      "StopName": {
        "Zh_tw": "新化站",
        "En": "Sinhua Bus Station"
      }
    },
    "EndStop": {
      "StopID": "4695",
      "StopName": {
        "Zh_tw": "玉峰里",
        "En": "Yufeng Vil."
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1102",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1102",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1102.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1102",
    "RouteDistance": 12.7
  },
  {
    "RouteUID": "TNN1103",
    "RouteID": "1103",
    "RouteName": {
      "Zh_tw": "綠3",
      "En": "G3"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "新化",
      "En": "Sinhua"
    },
    "DestinationStopName": {
      "Zh_tw": "善化",
      "En": "Shanhua"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "4737",
      "StopName": {
        "Zh_tw": "新化站",
        "En": "Sinhua Bus Station"
      }
    },
    "EndStop": {
      "StopID": "4762",
      "StopName": {
        "Zh_tw": "善化轉運站",
        "En": "Shanhua Bus Station"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1103",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1103",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1103.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1103",
    "RouteDistance": 10.6
  },
  {
    "RouteUID": "TNN1104",
    "RouteID": "1104",
    "RouteName": {
      "Zh_tw": "綠4",
      "En": "G4"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "新化",
      "En": "Sinhua"
    },
    "DestinationStopName": {
      "Zh_tw": "善化",
      "En": "Shanhua"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "4789",
      "StopName": {
        "Zh_tw": "新化站",
        "En": "Sinhua Bus Station"
      }
    },
    "EndStop": {
      "StopID": "4814",
      "StopName": {
        "Zh_tw": "善化轉運站",
        "En": "Shanhua Bus Station"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1104",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1104",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1104.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1104",
    "RouteDistance": 22
  },
  {
    "RouteUID": "TNN1105",
    "RouteID": "1105",
    "RouteName": {
      "Zh_tw": "綠5",
      "En": "G5"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "臺鐵永康",
      "En": "Yongkang Train Station"
    },
    "DestinationStopName": {
      "Zh_tw": "大社",
      "En": "Dashe"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "4841",
      "StopName": {
        "Zh_tw": "永康火車站",
        "En": "Yongkang Train Station"
      }
    },
    "EndStop": {
      "StopID": "4861",
      "StopName": {
        "Zh_tw": "大社",
        "En": "Dashe"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1105",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1105",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1105.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1105",
    "RouteDistance": 13.5
  },
  {
    "RouteUID": "TNN1106",
    "RouteID": "1106",
    "RouteName": {
      "Zh_tw": "綠6",
      "En": "G6"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "新化",
      "En": "Sinhua"
    },
    "DestinationStopName": {
      "Zh_tw": "大社",
      "En": "Dashe"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "4883",
      "StopName": {
        "Zh_tw": "新化站",
        "En": "Sinhua Bus Station"
      }
    },
    "EndStop": {
      "StopID": "4902",
      "StopName": {
        "Zh_tw": "大社",
        "En": "Dashe"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1106",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1106",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1106.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1106",
    "RouteDistance": 11.1
  },
  {
    "RouteUID": "TNN1107",
    "RouteID": "1107",
    "RouteName": {
      "Zh_tw": "綠7",
      "En": "G7"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "新化",
      "En": "Sinhua"
    },
    "DestinationStopName": {
      "Zh_tw": "大社",
      "En": "Dashe"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "4923",
      "StopName": {
        "Zh_tw": "新化站",
        "En": "Sinhua Bus Station"
      }
    },
    "EndStop": {
      "StopID": "4945",
      "StopName": {
        "Zh_tw": "大社",
        "En": "Dashe"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1107",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1107",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1107.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1107",
    "RouteDistance": 10.8
  },
  {
    "RouteUID": "TNN1110",
    "RouteID": "1110",
    "RouteName": {
      "Zh_tw": "綠10",
      "En": "G10"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "新化",
      "En": "Sinhua"
    },
    "DestinationStopName": {
      "Zh_tw": "山上",
      "En": "Shanshang"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "4969",
      "StopName": {
        "Zh_tw": "新化站",
        "En": "Sinhua Bus Station"
      }
    },
    "EndStop": {
      "StopID": "4988",
      "StopName": {
        "Zh_tw": "明和里",
        "En": "Minghe Vil."
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1110",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1110",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1110.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1110",
    "RouteDistance": 12.3
  },
  {
    "RouteUID": "TNN1111",
    "RouteID": "1111",
    "RouteName": {
      "Zh_tw": "綠11",
      "En": "G11"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "新化",
      "En": "Sinhua"
    },
    "DestinationStopName": {
      "Zh_tw": "善化",
      "En": "Shanhua"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "5009",
      "StopName": {
        "Zh_tw": "新化站",
        "En": "Sinhua Bus Station"
      }
    },
    "EndStop": {
      "StopID": "5035",
      "StopName": {
        "Zh_tw": "善化轉運站",
        "En": "Shanhua Bus Station"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1111",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1111",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1111.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1111",
    "RouteDistance": 25.5
  },
  {
    "RouteUID": "TNN1112",
    "RouteID": "1112",
    "RouteName": {
      "Zh_tw": "綠12",
      "En": "G12"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "臺南、新化",
      "En": "Tainan、Sinhua"
    },
    "DestinationStopName": {
      "Zh_tw": "南化玉山",
      "En": "Nanhua、Yushan"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "22200",
      "StopName": {
        "Zh_tw": "臺南轉運站",
        "En": "Tainan Bus Station"
      }
    },
    "EndStop": {
      "StopID": "5113",
      "StopName": {
        "Zh_tw": "玉山",
        "En": "Yushan"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1112",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1112",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1112.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1112",
    "RouteDistance": 21.5
  },
  {
    "RouteUID": "TNN1113",
    "RouteID": "1113",
    "RouteName": {
      "Zh_tw": "綠13",
      "En": "G13"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "新化",
      "En": "Sinhua"
    },
    "DestinationStopName": {
      "Zh_tw": "左鎮",
      "En": "Zuojhen"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "5165",
      "StopName": {
        "Zh_tw": "新化站",
        "En": "Sinhua Bus Station"
      }
    },
    "EndStop": {
      "StopID": "5200",
      "StopName": {
        "Zh_tw": "左鎮區公所",
        "En": "Zuojhen District Office"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1113",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1113",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1113.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1113",
    "RouteDistance": 13.7
  },
  {
    "RouteUID": "TNN1114",
    "RouteID": "1114",
    "RouteName": {
      "Zh_tw": "綠14",
      "En": "G14"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "新化",
      "En": "Sinhua"
    },
    "DestinationStopName": {
      "Zh_tw": "九層嶺",
      "En": "Jioucengling"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "5237",
      "StopName": {
        "Zh_tw": "新化站",
        "En": "Sinhua Bus Station"
      }
    },
    "EndStop": {
      "StopID": "5248",
      "StopName": {
        "Zh_tw": "九層嶺",
        "En": "Jioucengling"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1114",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1114",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1114.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1114",
    "RouteDistance": 7.8
  },
  {
    "RouteUID": "TNN1115",
    "RouteID": "1115",
    "RouteName": {
      "Zh_tw": "綠15",
      "En": "G15"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "新化",
      "En": "Sinhua"
    },
    "DestinationStopName": {
      "Zh_tw": "五甲勢",
      "En": "Wujiashi"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "5261",
      "StopName": {
        "Zh_tw": "新化站",
        "En": "Sinhua Bus Station"
      }
    },
    "EndStop": {
      "StopID": "5271",
      "StopName": {
        "Zh_tw": "五甲勢",
        "En": "Wujiashi"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1115",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1115",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1115.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1115",
    "RouteDistance": 5.5
  },
  {
    "RouteUID": "TNN1116",
    "RouteID": "1116",
    "RouteName": {
      "Zh_tw": "綠16",
      "En": "G16"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "新化",
      "En": "Sinhua"
    },
    "DestinationStopName": {
      "Zh_tw": "關廟",
      "En": "Guanmiao"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "5283",
      "StopName": {
        "Zh_tw": "新化站",
        "En": "Sinhua Bus Station"
      }
    },
    "EndStop": {
      "StopID": "15736",
      "StopName": {
        "Zh_tw": "高鐵台南站",
        "En": "THSR Tainan Station"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1116",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1116",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1116.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1116",
    "RouteDistance": 9.3
  },
  {
    "RouteUID": "TNN1117",
    "RouteID": "1117",
    "RouteName": {
      "Zh_tw": "綠17",
      "En": "G17"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "安工區",
      "En": "Anping Industrial Park"
    },
    "DestinationStopName": {
      "Zh_tw": "新化",
      "En": "Sinhua"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "8618",
      "StopName": {
        "Zh_tw": "安平工業區",
        "En": "Anping Industrial Park"
      }
    },
    "EndStop": {
      "StopID": "8660",
      "StopName": {
        "Zh_tw": "新化站",
        "En": "Sinhua Bus Station"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1117",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1117",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1117.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1117",
    "RouteDistance": 31.1
  },
  {
    "RouteUID": "TNN1120",
    "RouteID": "1120",
    "RouteName": {
      "Zh_tw": "綠20",
      "En": "G20"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      },
      {
        "OperatorID": "16202",
        "OperatorName": {
          "Zh_tw": "台一大車隊",
          "En": "Daisuki Taxi"
        },
        "OperatorCode": "Daisuki Taxi"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "玉井",
      "En": "Yujing"
    },
    "DestinationStopName": {
      "Zh_tw": "永興吊橋",
      "En": "Yongxing drawbridge"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "5319",
      "StopName": {
        "Zh_tw": "玉井站",
        "En": "Yujing Bus Station"
      }
    },
    "EndStop": {
      "StopID": "5332",
      "StopName": {
        "Zh_tw": "永興吊橋",
        "En": "Yongxing drawbridge"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1120",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1120",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1120.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1120",
    "RouteDistance": 9.2
  },
  {
    "RouteUID": "TNN1121",
    "RouteID": "1121",
    "RouteName": {
      "Zh_tw": "綠21",
      "En": "G21"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "16202",
        "OperatorName": {
          "Zh_tw": "台一大車隊",
          "En": "Daisuki Taxi"
        },
        "OperatorCode": "Daisuki Taxi"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "玉井",
      "En": "Yujing"
    },
    "DestinationStopName": {
      "Zh_tw": "龜丹油礦",
      "En": "Gueidan Oil Field"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "5347",
      "StopName": {
        "Zh_tw": "玉井站",
        "En": "Yujing Bus Station"
      }
    },
    "EndStop": {
      "StopID": "5357",
      "StopName": {
        "Zh_tw": "龜丹油礦",
        "En": "Gueidan Oil Field"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1121",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1121",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1121.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1121",
    "RouteDistance": 10.1
  },
  {
    "RouteUID": "TNN1122",
    "RouteID": "1122",
    "RouteName": {
      "Zh_tw": "綠22",
      "En": "G22"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "玉井",
      "En": "Yujing"
    },
    "DestinationStopName": {
      "Zh_tw": "梅嶺",
      "En": "Meiling"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "5369",
      "StopName": {
        "Zh_tw": "玉井站",
        "En": "Yujing Bus Station"
      }
    },
    "EndStop": {
      "StopID": "5390",
      "StopName": {
        "Zh_tw": "梅嶺",
        "En": "Meiling"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1122",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1122",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1122.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1122",
    "RouteDistance": 17.5
  },
  {
    "RouteUID": "TNN1123",
    "RouteID": "1123",
    "RouteName": {
      "Zh_tw": "綠23",
      "En": "G23"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "玉井",
      "En": "Yujing"
    },
    "DestinationStopName": {
      "Zh_tw": "雙溪",
      "En": "Shuangsi"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "5413",
      "StopName": {
        "Zh_tw": "玉井站",
        "En": "Yujing Bus Station"
      }
    },
    "EndStop": {
      "StopID": "5440",
      "StopName": {
        "Zh_tw": "雙溪新社區",
        "En": "Shuangsi New Community"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1123",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1123",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1123.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1123",
    "RouteDistance": 19.8
  },
  {
    "RouteUID": "TNN1124",
    "RouteID": "1124",
    "RouteName": {
      "Zh_tw": "綠24",
      "En": "G24"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "玉井",
      "En": "Yujing"
    },
    "DestinationStopName": {
      "Zh_tw": "曾文水庫",
      "En": "Zengwun Reservoir"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "5469",
      "StopName": {
        "Zh_tw": "玉井站",
        "En": "Yujing Bus Station"
      }
    },
    "EndStop": {
      "StopID": "8354",
      "StopName": {
        "Zh_tw": "觀景樓",
        "En": "Observatory"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1124",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1124",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1124.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1124",
    "RouteDistance": 13.5
  },
  {
    "RouteUID": "TNN1125",
    "RouteID": "1125",
    "RouteName": {
      "Zh_tw": "綠25",
      "En": "G25"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "玉井",
      "En": "Yujing"
    },
    "DestinationStopName": {
      "Zh_tw": "大埔",
      "En": "Dapu"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "5513",
      "StopName": {
        "Zh_tw": "玉井站",
        "En": "Yujing Bus Station"
      }
    },
    "EndStop": {
      "StopID": "5559",
      "StopName": {
        "Zh_tw": "順福旅社",
        "En": "Shunfu Hotel"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1125",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1125",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1125.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1125",
    "RouteDistance": 40.3
  },
  {
    "RouteUID": "TNN1126",
    "RouteID": "1126",
    "RouteName": {
      "Zh_tw": "綠26",
      "En": "G26"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "玉井",
      "En": "Yujing"
    },
    "DestinationStopName": {
      "Zh_tw": "甲仙",
      "En": "Jiasian"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "5604",
      "StopName": {
        "Zh_tw": "玉井站",
        "En": "Yujing Bus Station"
      }
    },
    "EndStop": {
      "StopID": "5631",
      "StopName": {
        "Zh_tw": "甲仙",
        "En": "Jiasian"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1126",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1126",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1126.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1126",
    "RouteDistance": 23.8
  },
  {
    "RouteUID": "TNN1127",
    "RouteID": "1127",
    "RouteName": {
      "Zh_tw": "綠27",
      "En": "G27"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "玉井",
      "En": "Yujing"
    },
    "DestinationStopName": {
      "Zh_tw": "南化",
      "En": "Nanhua"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "5660",
      "StopName": {
        "Zh_tw": "玉井站",
        "En": "Yujing Bus Station"
      }
    },
    "EndStop": {
      "StopID": "5686",
      "StopName": {
        "Zh_tw": "茄苳橋",
        "En": "Jiadong Bridge"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1127",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1127",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1127.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1127",
    "RouteDistance": 13.1
  },
  {
    "RouteUID": "TNN1129",
    "RouteID": "1129",
    "RouteName": {
      "Zh_tw": "綠29",
      "En": "G29"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "16202",
        "OperatorName": {
          "Zh_tw": "台一大車隊",
          "En": "Daisuki Taxi"
        },
        "OperatorCode": "Daisuki Taxi"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "玉井",
      "En": "Yujing"
    },
    "DestinationStopName": {
      "Zh_tw": "木瓜坑",
      "En": "Muguakeng"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "24900",
      "StopName": {
        "Zh_tw": "玉井站",
        "En": "Yujing Bus Station"
      }
    },
    "EndStop": {
      "StopID": "24949",
      "StopName": {
        "Zh_tw": "木瓜坑",
        "En": "Muguakeng"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1129",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1129",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1129.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1129",
    "RouteDistance": 13.1
  },
  {
    "RouteUID": "TNN1200",
    "RouteID": "1200",
    "RouteName": {
      "Zh_tw": "藍幹線",
      "En": "Blue"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": true,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "安工區",
      "En": "Anping Industrial Park"
    },
    "DestinationStopName": {
      "Zh_tw": "佳里",
      "En": "Jiali"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "5716",
      "StopName": {
        "Zh_tw": "安平工業區",
        "En": "Anping Industrial Park"
      }
    },
    "EndStop": {
      "StopID": "5759",
      "StopName": {
        "Zh_tw": "佳里站",
        "En": "Jiali Bus Station"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1200",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1200",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1200.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1200",
    "RouteDistance": 42.4
  },
  {
    "RouteUID": "TNN1201",
    "RouteID": "1201",
    "RouteName": {
      "Zh_tw": "藍1",
      "En": "B1"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "佳里",
      "En": "Jiali"
    },
    "DestinationStopName": {
      "Zh_tw": "南鯤鯓",
      "En": "Nankunshen Temple"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "5806",
      "StopName": {
        "Zh_tw": "佳里站",
        "En": "Jiali Bus Station"
      }
    },
    "EndStop": {
      "StopID": "5828",
      "StopName": {
        "Zh_tw": "南鯤鯓",
        "En": "Nankunshen Temple"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1201",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1201",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1201.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1201",
    "RouteDistance": 13.5
  },
  {
    "RouteUID": "TNN1202",
    "RouteID": "1202",
    "RouteName": {
      "Zh_tw": "藍2",
      "En": "B2"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "佳里",
      "En": "Jiali"
    },
    "DestinationStopName": {
      "Zh_tw": "南鯤鯓",
      "En": "Nankunshen Temple"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "5852",
      "StopName": {
        "Zh_tw": "佳里站",
        "En": "Jiali Bus Station"
      }
    },
    "EndStop": {
      "StopID": "5880",
      "StopName": {
        "Zh_tw": "南鯤鯓",
        "En": "Nankunshen Temple"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1202",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1202",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1202.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1202",
    "RouteDistance": 12.7
  },
  {
    "RouteUID": "TNN1203",
    "RouteID": "1203",
    "RouteName": {
      "Zh_tw": "藍3",
      "En": "B3"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "佳里",
      "En": "Jiali"
    },
    "DestinationStopName": {
      "Zh_tw": "蘆竹溝",
      "En": "Lujhugou"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "5910",
      "StopName": {
        "Zh_tw": "佳里站",
        "En": "Jiali Bus Station"
      }
    },
    "EndStop": {
      "StopID": "5933",
      "StopName": {
        "Zh_tw": "蘆竹溝",
        "En": "Lujhugou"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1203",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1203",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1203.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1203",
    "RouteDistance": 10.6
  },
  {
    "RouteUID": "TNN1204",
    "RouteID": "1204",
    "RouteName": {
      "Zh_tw": "藍4",
      "En": "B4"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "16202",
        "OperatorName": {
          "Zh_tw": "台一大車隊",
          "En": "Daisuki Taxi"
        },
        "OperatorCode": "Daisuki Taxi"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "學甲區公所",
      "En": "Syuejia District Office"
    },
    "DestinationStopName": {
      "Zh_tw": "南鯤鯓",
      "En": "Nankunshen Temple"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "25176",
      "StopName": {
        "Zh_tw": "奇美佳里分院",
        "En": "Chi Mei Jiali Hospital"
      }
    },
    "EndStop": {
      "StopID": "24739",
      "StopName": {
        "Zh_tw": "南鯤鯓",
        "En": "Nankunshen Temple"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1204",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1204",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1204.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1204",
    "RouteDistance": 13.5
  },
  {
    "RouteUID": "TNN1210",
    "RouteID": "1210",
    "RouteName": {
      "Zh_tw": "藍10",
      "En": "B10"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "佳里",
      "En": "Jiali"
    },
    "DestinationStopName": {
      "Zh_tw": "將軍漁港",
      "En": "Jiangjyun Fish Port"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "5958",
      "StopName": {
        "Zh_tw": "佳里站",
        "En": "Jiali Bus Station"
      }
    },
    "EndStop": {
      "StopID": "5978",
      "StopName": {
        "Zh_tw": "將軍漁港",
        "En": "Jiangjyun Fish Port"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1210",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1210",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1210.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1210",
    "RouteDistance": 22
  },
  {
    "RouteUID": "TNN1211",
    "RouteID": "1211",
    "RouteName": {
      "Zh_tw": "藍11",
      "En": "B11"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "佳里",
      "En": "Jiali"
    },
    "DestinationStopName": {
      "Zh_tw": "青鯤鯓",
      "En": "Cingkunshen"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "6002",
      "StopName": {
        "Zh_tw": "佳里站",
        "En": "Jiali Bus Station"
      }
    },
    "EndStop": {
      "StopID": "6018",
      "StopName": {
        "Zh_tw": "鯤鯓港",
        "En": "Kunsheng Harbor"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1211",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1211",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1211.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1211",
    "RouteDistance": 13.5
  },
  {
    "RouteUID": "TNN1213",
    "RouteID": "1213",
    "RouteName": {
      "Zh_tw": "藍13",
      "En": "B13"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "佳里",
      "En": "Jiali"
    },
    "DestinationStopName": {
      "Zh_tw": "西寮",
      "En": "Siliao"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "6070",
      "StopName": {
        "Zh_tw": "佳里站",
        "En": "Jiali Bus Station"
      }
    },
    "EndStop": {
      "StopID": "6084",
      "StopName": {
        "Zh_tw": "西寮",
        "En": "Siliao"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1213",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1213",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1213.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1213",
    "RouteDistance": 10.8
  },
  {
    "RouteUID": "TNN1214",
    "RouteID": "1214",
    "RouteName": {
      "Zh_tw": "藍14",
      "En": "B14"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "16202",
        "OperatorName": {
          "Zh_tw": "台一大車隊",
          "En": "Daisuki Taxi"
        },
        "OperatorCode": "Daisuki Taxi"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "學甲區公所",
      "En": "Syuejia District Office"
    },
    "DestinationStopName": {
      "Zh_tw": "奇美佳里分院",
      "En": "Chi Mei Jiali Hospital"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "24748",
      "StopName": {
        "Zh_tw": "學甲區公所",
        "En": "Syuejia District Office"
      }
    },
    "EndStop": {
      "StopID": "24759",
      "StopName": {
        "Zh_tw": "奇美佳里分院",
        "En": "Chi Mei Jiali Hospital"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1214",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1214",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1214.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1214",
    "RouteDistance": 13.5
  },
  {
    "RouteUID": "TNN1215",
    "RouteID": "1215",
    "RouteName": {
      "Zh_tw": "藍15",
      "En": "B15"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "16202",
        "OperatorName": {
          "Zh_tw": "台一大車隊",
          "En": "Daisuki Taxi"
        },
        "OperatorCode": "Daisuki Taxi"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "漚汪",
      "En": "Ouwang"
    },
    "DestinationStopName": {
      "Zh_tw": "佳里",
      "En": "Jiali"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "24770",
      "StopName": {
        "Zh_tw": "漚汪",
        "En": "Ouwang"
      }
    },
    "EndStop": {
      "StopID": "24785",
      "StopName": {
        "Zh_tw": "奇美佳里分院",
        "En": "Chi Mei Jiali Hospital"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1215",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1215",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1215.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1215",
    "RouteDistance": 10.8
  },
  {
    "RouteUID": "TNN1220",
    "RouteID": "1220",
    "RouteName": {
      "Zh_tw": "藍20",
      "En": "B20"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "佳里",
      "En": "Jiali"
    },
    "DestinationStopName": {
      "Zh_tw": "馬沙溝遊憩區",
      "En": "Mashagou Recreation Area"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "6100",
      "StopName": {
        "Zh_tw": "佳里站",
        "En": "Jiali Bus Station"
      }
    },
    "EndStop": {
      "StopID": "6125",
      "StopName": {
        "Zh_tw": "馬沙溝遊憩區",
        "En": "Mashagou Recreation Area"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1220",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1220",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1220.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1220",
    "RouteDistance": 12.3
  },
  {
    "RouteUID": "TNN1221",
    "RouteID": "1221",
    "RouteName": {
      "Zh_tw": "藍21",
      "En": "B21"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "佳里",
      "En": "Jiali"
    },
    "DestinationStopName": {
      "Zh_tw": "九塊厝",
      "En": "Jioukuaicuo"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "6152",
      "StopName": {
        "Zh_tw": "佳里站",
        "En": "Jiali Bus Station"
      }
    },
    "EndStop": {
      "StopID": "6178",
      "StopName": {
        "Zh_tw": "九塊厝",
        "En": "Jioukuaicuo"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1221",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1221",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1221.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1221",
    "RouteDistance": 25.5
  },
  {
    "RouteUID": "TNN1222",
    "RouteID": "1222",
    "RouteName": {
      "Zh_tw": "藍22",
      "En": "B22"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "佳里",
      "En": "Jiali"
    },
    "DestinationStopName": {
      "Zh_tw": "九塊厝",
      "En": "Jioukuaicuo"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "6206",
      "StopName": {
        "Zh_tw": "佳里站",
        "En": "Jiali Bus Station"
      }
    },
    "EndStop": {
      "StopID": "6226",
      "StopName": {
        "Zh_tw": "九塊厝",
        "En": "Jioukuaicuo"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1222",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1222",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1222.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1222",
    "RouteDistance": 22.5
  },
  {
    "RouteUID": "TNN1223",
    "RouteID": "1223",
    "RouteName": {
      "Zh_tw": "藍23",
      "En": "B23"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "安工區",
      "En": "Anping Industrial Park"
    },
    "DestinationStopName": {
      "Zh_tw": "九塊厝",
      "En": "Jioukuaicuo"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "6252",
      "StopName": {
        "Zh_tw": "安平工業區",
        "En": "Anping Industrial Park"
      }
    },
    "EndStop": {
      "StopID": "6297",
      "StopName": {
        "Zh_tw": "九塊厝",
        "En": "Jioukuaicuo"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1223",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1223",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1223.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1223",
    "RouteDistance": 13.7
  },
  {
    "RouteUID": "TNN1224",
    "RouteID": "1224",
    "RouteName": {
      "Zh_tw": "藍24",
      "En": "B24"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "安工區",
      "En": "Anping Industrial Park"
    },
    "DestinationStopName": {
      "Zh_tw": "青草里",
      "En": "Cingcao Vil."
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "6342",
      "StopName": {
        "Zh_tw": "安平工業區",
        "En": "Anping Industrial Park"
      }
    },
    "EndStop": {
      "StopID": "6390",
      "StopName": {
        "Zh_tw": "青草里",
        "En": "Cingcao Vil."
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1224",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1224",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1224.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1224",
    "RouteDistance": 7.8
  },
  {
    "RouteUID": "TNN1225",
    "RouteID": "1225",
    "RouteName": {
      "Zh_tw": "藍25",
      "En": "B25"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "佳里",
      "En": "Jiali"
    },
    "DestinationStopName": {
      "Zh_tw": "科工區",
      "En": "Tainan Technology Industrial Park"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "6438",
      "StopName": {
        "Zh_tw": "佳里站",
        "En": "Jiali Bus Station"
      }
    },
    "EndStop": {
      "StopID": "6461",
      "StopName": {
        "Zh_tw": "南臺灣創新園區",
        "En": "Southern Taiwan Innovation ＆ Research Park，MOEA"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1225",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1225",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1225.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1225",
    "RouteDistance": 5.5
  },
  {
    "RouteUID": "TNN1226",
    "RouteID": "1226",
    "RouteName": {
      "Zh_tw": "藍26",
      "En": "B26"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "16202",
        "OperatorName": {
          "Zh_tw": "台一大車隊",
          "En": "Daisuki Taxi"
        },
        "OperatorCode": "Daisuki Taxi"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "佳里",
      "En": "Jiali"
    },
    "DestinationStopName": {
      "Zh_tw": "篤加里",
      "En": "Dujia Vil."
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "24800",
      "StopName": {
        "Zh_tw": "奇美佳里分院",
        "En": "Chi Mei Jiali Hospital"
      }
    },
    "EndStop": {
      "StopID": "24811",
      "StopName": {
        "Zh_tw": "篤加里",
        "En": "Dujia Vil."
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1226",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1226",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1226.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1226",
    "RouteDistance": 5.5
  },
  {
    "RouteUID": "TNN1227",
    "RouteID": "1227",
    "RouteName": {
      "Zh_tw": "藍27",
      "En": "B27"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "16202",
        "OperatorName": {
          "Zh_tw": "台一大車隊",
          "En": "Daisuki Taxi"
        },
        "OperatorCode": "Daisuki Taxi"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "佳里",
      "En": "Jiali"
    },
    "DestinationStopName": {
      "Zh_tw": "溪南里寶龍宮",
      "En": "Sinan Vil. Baolong Temple"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "24822",
      "StopName": {
        "Zh_tw": "奇美佳里分院",
        "En": "Chi Mei Jiali Hospital"
      }
    },
    "EndStop": {
      "StopID": "24835",
      "StopName": {
        "Zh_tw": "溪南里寶龍宮",
        "En": "Sinan Vil. Baolong Temple"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1227",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1227",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1227.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1227",
    "RouteDistance": 12.3
  },
  {
    "RouteUID": "TNN1228",
    "RouteID": "1228",
    "RouteName": {
      "Zh_tw": "藍28",
      "En": "B28"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "16202",
        "OperatorName": {
          "Zh_tw": "台一大車隊",
          "En": "Daisuki Taxi"
        },
        "OperatorCode": "Daisuki Taxi"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "佳里",
      "En": "Jiali"
    },
    "DestinationStopName": {
      "Zh_tw": "佳里榮民之家",
      "En": "Jiali Veterans Home"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "24848",
      "StopName": {
        "Zh_tw": "奇美佳里分院",
        "En": "Chi Mei Jiali Hospital"
      }
    },
    "EndStop": {
      "StopID": "24864",
      "StopName": {
        "Zh_tw": "佳里榮民之家",
        "En": "Jiali Veterans Home"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1228",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1228",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1228.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1228",
    "RouteDistance": 25.5
  },
  {
    "RouteUID": "TNN1300",
    "RouteID": "1300",
    "RouteName": {
      "Zh_tw": "棕幹線",
      "En": "Brown"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      },
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": true,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "新營",
      "En": "Sinying"
    },
    "DestinationStopName": {
      "Zh_tw": "佳里",
      "En": "Jiali"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "6514",
      "StopName": {
        "Zh_tw": "新營站",
        "En": "Sinying Station"
      }
    },
    "EndStop": {
      "StopID": "6553",
      "StopName": {
        "Zh_tw": "佳里站",
        "En": "Jiali Bus Station"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1300",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1300",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1300.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1300",
    "RouteDistance": 31.1
  },
  {
    "RouteUID": "TNN1301",
    "RouteID": "1301",
    "RouteName": {
      "Zh_tw": "棕1",
      "En": "BR1"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "新營",
      "En": "Sinying"
    },
    "DestinationStopName": {
      "Zh_tw": "雙春北門",
      "En": "Shuangchun、Beimen"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "6594",
      "StopName": {
        "Zh_tw": "新營站",
        "En": "Sinying Station"
      }
    },
    "EndStop": {
      "StopID": "20377",
      "StopName": {
        "Zh_tw": "北門國中",
        "En": "Beimen Junior High School"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1301",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1301",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1301.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1301",
    "RouteDistance": 33.4
  },
  {
    "RouteUID": "TNN1302",
    "RouteID": "1302",
    "RouteName": {
      "Zh_tw": "棕2",
      "En": "BR2"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "新營",
      "En": "Sinying"
    },
    "DestinationStopName": {
      "Zh_tw": "下中",
      "En": "Siajhong"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "6652",
      "StopName": {
        "Zh_tw": "新營站",
        "En": "Sinying Station"
      }
    },
    "EndStop": {
      "StopID": "24340",
      "StopName": {
        "Zh_tw": "下中福王宮",
        "En": "Siajhong Fuwang Temple"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1302",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1302",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1302.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1302",
    "RouteDistance": 23
  },
  {
    "RouteUID": "TNN1303",
    "RouteID": "1303",
    "RouteName": {
      "Zh_tw": "棕3",
      "En": "BR3"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "新營",
      "En": "Sinying"
    },
    "DestinationStopName": {
      "Zh_tw": "南港里",
      "En": "Nangang Vil."
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "6700",
      "StopName": {
        "Zh_tw": "新營站",
        "En": "Sinying Station"
      }
    },
    "EndStop": {
      "StopID": "6727",
      "StopName": {
        "Zh_tw": "南港里",
        "En": "Nangang Vil."
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1303",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1303",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1303.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1303",
    "RouteDistance": 21.7
  },
  {
    "RouteUID": "TNN1304",
    "RouteID": "1304",
    "RouteName": {
      "Zh_tw": "棕4",
      "En": "BR4"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "新營",
      "En": "Sinying"
    },
    "DestinationStopName": {
      "Zh_tw": "朴子轉運站",
      "En": "Pozih Bus Station"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "23540",
      "StopName": {
        "Zh_tw": "新營站",
        "En": "Sinying Station"
      }
    },
    "EndStop": {
      "StopID": "23666",
      "StopName": {
        "Zh_tw": "朴子轉運站",
        "En": "Pozih Bus Station"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1304",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1304",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1304.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1304",
    "RouteDistance": 21.7
  },
  {
    "RouteUID": "TNN1305",
    "RouteID": "1305",
    "RouteName": {
      "Zh_tw": "棕5",
      "En": "BR5"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "新營",
      "En": "Sinying"
    },
    "DestinationStopName": {
      "Zh_tw": "好美里",
      "En": "Haomei Vil."
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "23613",
      "StopName": {
        "Zh_tw": "新營站",
        "En": "Sinying Station"
      }
    },
    "EndStop": {
      "StopID": "23719",
      "StopName": {
        "Zh_tw": "好美里",
        "En": "Haomei Vil."
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1305",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1305",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1305.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1305",
    "RouteDistance": 33.9
  },
  {
    "RouteUID": "TNN1306",
    "RouteID": "1306",
    "RouteName": {
      "Zh_tw": "棕6",
      "En": "BR6"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "新營",
      "En": "Sinying"
    },
    "DestinationStopName": {
      "Zh_tw": "布袋遊客中心",
      "En": "Budai Visitor Center"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "23722",
      "StopName": {
        "Zh_tw": "新營站",
        "En": "Sinying Station"
      }
    },
    "EndStop": {
      "StopID": "23799",
      "StopName": {
        "Zh_tw": "布袋商港",
        "En": "Budai Port"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1306",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1306",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1306.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1306",
    "RouteDistance": 29
  },
  {
    "RouteUID": "TNN1310",
    "RouteID": "1310",
    "RouteName": {
      "Zh_tw": "棕10",
      "En": "BR10"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "學甲",
      "En": "Syuejia"
    },
    "DestinationStopName": {
      "Zh_tw": "麻豆",
      "En": "Madou"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "6756",
      "StopName": {
        "Zh_tw": "學甲(民權路)",
        "En": "Syuejia(Mincyuan Rd.)"
      }
    },
    "EndStop": {
      "StopID": "6774",
      "StopName": {
        "Zh_tw": "麻豆國中",
        "En": "Madou Junior High School"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1310",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1310",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1310.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1310",
    "RouteDistance": 16.3
  },
  {
    "RouteUID": "TNN1311",
    "RouteID": "1311",
    "RouteName": {
      "Zh_tw": "棕11",
      "En": "BR11"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "學甲",
      "En": "Syuejia"
    },
    "DestinationStopName": {
      "Zh_tw": "頑皮世界",
      "En": "Wanpi World"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "6794",
      "StopName": {
        "Zh_tw": "學甲(民權路)",
        "En": "Syuejia(Mincyuan Rd.)"
      }
    },
    "EndStop": {
      "StopID": "21740",
      "StopName": {
        "Zh_tw": "頑皮世界",
        "En": "Wanpi World"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1311",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1311",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1311.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1311",
    "RouteDistance": 11.3
  },
  {
    "RouteUID": "TNN1400",
    "RouteID": "1400",
    "RouteName": {
      "Zh_tw": "橘幹線",
      "En": "Orange"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": true,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "佳里",
      "En": "Jiali "
    },
    "DestinationStopName": {
      "Zh_tw": "玉井",
      "En": "Yujing"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "6832",
      "StopName": {
        "Zh_tw": "佳里站",
        "En": "Jiali Bus Station"
      }
    },
    "EndStop": {
      "StopID": "6873",
      "StopName": {
        "Zh_tw": "玉井站",
        "En": "Yujing Bus Station"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1400",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1400",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1400.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1400",
    "RouteDistance": 31.1
  },
  {
    "RouteUID": "TNN1401",
    "RouteID": "1401",
    "RouteName": {
      "Zh_tw": "橘1",
      "En": "O1"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "善化轉運站",
      "En": "Shanhua Bus Station"
    },
    "DestinationStopName": {
      "Zh_tw": "蒙正",
      "En": "Mengjheng"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "6916",
      "StopName": {
        "Zh_tw": "善化轉運站",
        "En": "Shanhua Bus Station"
      }
    },
    "EndStop": {
      "StopID": "6933",
      "StopName": {
        "Zh_tw": "開靈宮",
        "En": "Kailing Temple"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1401",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1401",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1401.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1401",
    "RouteDistance": 27.4
  },
  {
    "RouteUID": "TNN1402",
    "RouteID": "1402",
    "RouteName": {
      "Zh_tw": "橘2",
      "En": "O2"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "胡厝寮",
      "En": "Hucuoliao "
    },
    "DestinationStopName": {
      "Zh_tw": "大內",
      "En": "Danei"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "6952",
      "StopName": {
        "Zh_tw": "胡厝寮",
        "En": "Hucuoliao"
      }
    },
    "EndStop": {
      "StopID": "15894",
      "StopName": {
        "Zh_tw": "大內教會",
        "En": "Danei Church"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1402",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1402",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1402.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1402",
    "RouteDistance": 15.3
  },
  {
    "RouteUID": "TNN1403",
    "RouteID": "1403",
    "RouteName": {
      "Zh_tw": "橘3",
      "En": "O3"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "善化轉運站",
      "En": "Shanhua Bus Station"
    },
    "DestinationStopName": {
      "Zh_tw": "和順臺南",
      "En": "Tainan Bus Station"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "6998",
      "StopName": {
        "Zh_tw": "善化轉運站",
        "En": "Shanhua Bus Station"
      }
    },
    "EndStop": {
      "StopID": "8468",
      "StopName": {
        "Zh_tw": "臺南轉運站",
        "En": "Tainan Bus Station"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1403",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1403",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1403.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1403",
    "RouteDistance": 21.4
  },
  {
    "RouteUID": "TNN1404",
    "RouteID": "1404",
    "RouteName": {
      "Zh_tw": "橘4",
      "En": "O4"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "善化轉運站",
      "En": "Shanhua Bus Station"
    },
    "DestinationStopName": {
      "Zh_tw": "烏山頭水庫",
      "En": "Wushantou Reservoir"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "7058",
      "StopName": {
        "Zh_tw": "善化轉運站",
        "En": "Shanhua Bus Station"
      }
    },
    "EndStop": {
      "StopID": "7070",
      "StopName": {
        "Zh_tw": "烏山頭水庫",
        "En": "Wushantou Reservoir"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1404",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1404",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1404.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1404",
    "RouteDistance": 16.3
  },
  {
    "RouteUID": "TNN1405",
    "RouteID": "1405",
    "RouteName": {
      "Zh_tw": "橘5",
      "En": "O5"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "善化轉運站",
      "En": "Shanhua Bus Station"
    },
    "DestinationStopName": {
      "Zh_tw": "六甲",
      "En": "Lioujia"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "7084",
      "StopName": {
        "Zh_tw": "善化轉運站",
        "En": "Shanhua Bus Station"
      }
    },
    "EndStop": {
      "StopID": "7104",
      "StopName": {
        "Zh_tw": "六甲",
        "En": "Lioujia"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1405",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1405",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1405.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1405",
    "RouteDistance": 9.6
  },
  {
    "RouteUID": "TNN1406",
    "RouteID": "1406",
    "RouteName": {
      "Zh_tw": "橘6",
      "En": "O6"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "16202",
        "OperatorName": {
          "Zh_tw": "台一大車隊",
          "En": "Daisuki Taxi"
        },
        "OperatorCode": "Daisuki Taxi"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "隆田火車站",
      "En": "Longtian Train Station"
    },
    "DestinationStopName": {
      "Zh_tw": "六雙天清宮",
      "En": "Lioushuang Tiancing Temple"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "24880",
      "StopName": {
        "Zh_tw": "隆田火車站",
        "En": "Longtian Train Station"
      }
    },
    "EndStop": {
      "StopID": "24888",
      "StopName": {
        "Zh_tw": "六雙天清宮",
        "En": "Lioushuang Tiancing Temple"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1406",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1406",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1406.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1406",
    "RouteDistance": 51
  },
  {
    "RouteUID": "TNN1409",
    "RouteID": "1409",
    "RouteName": {
      "Zh_tw": "橘9",
      "En": "O9"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "16233",
        "OperatorName": {
          "Zh_tw": "漢程客運",
          "En": "Han-Cheng Bus Traffic Co., Ltd."
        },
        "OperatorCode": "HanCheng Bus"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "佳里站",
      "En": "Jiali Bus Station"
    },
    "DestinationStopName": {
      "Zh_tw": "高鐵嘉義站",
      "En": "THSR Chiayi Station"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "22021",
      "StopName": {
        "Zh_tw": "佳里站",
        "En": "Jiali Bus Station"
      }
    },
    "EndStop": {
      "StopID": "22029",
      "StopName": {
        "Zh_tw": "高鐵嘉義站",
        "En": "THSR Chiayi Station"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1409",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1409",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1409.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1409",
    "RouteDistance": 52.1
  },
  {
    "RouteUID": "TNN1410",
    "RouteID": "1410",
    "RouteName": {
      "Zh_tw": "橘10",
      "En": "O10"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "大地莊園",
      "En": "Dadi Manor"
    },
    "DestinationStopName": {
      "Zh_tw": "南藝大",
      "En": "TNNUA"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "8822",
      "StopName": {
        "Zh_tw": "大地莊園",
        "En": "Dadi Manor"
      }
    },
    "EndStop": {
      "StopID": "7157",
      "StopName": {
        "Zh_tw": "臺南藝術大學",
        "En": "Tainan National University of the Arts"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1410",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1410",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1410.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1410",
    "RouteDistance": 9.6
  },
  {
    "RouteUID": "TNN1411",
    "RouteID": "1411",
    "RouteName": {
      "Zh_tw": "橘11",
      "En": "O11"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "下營公所",
      "En": "Siaying District Office "
    },
    "DestinationStopName": {
      "Zh_tw": "和順臺南",
      "En": "Tainan Bus Station"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "7190",
      "StopName": {
        "Zh_tw": "下營區公所",
        "En": "Siaying District Office"
      }
    },
    "EndStop": {
      "StopID": "8880",
      "StopName": {
        "Zh_tw": "臺南轉運站",
        "En": "Tainan Bus Station"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1411",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1411",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1411.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1411",
    "RouteDistance": 9.6
  },
  {
    "RouteUID": "TNN1412",
    "RouteID": "1412",
    "RouteName": {
      "Zh_tw": "橘12",
      "En": "O12"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "麻豆",
      "En": "Madou "
    },
    "DestinationStopName": {
      "Zh_tw": "臺南",
      "En": "Tainan"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "7270",
      "StopName": {
        "Zh_tw": "麻豆轉運站",
        "En": "Madou Bus Station"
      }
    },
    "EndStop": {
      "StopID": "7321",
      "StopName": {
        "Zh_tw": "臺南轉運站",
        "En": "Tainan Bus Station"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1412",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1412",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1412.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1412",
    "RouteDistance": 9.6
  },
  {
    "RouteUID": "TNN1413",
    "RouteID": "1413",
    "RouteName": {
      "Zh_tw": "橘13",
      "En": "O13"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "16233",
        "OperatorName": {
          "Zh_tw": "漢程客運",
          "En": "Han-Cheng Bus Traffic Co., Ltd."
        },
        "OperatorCode": "HanCheng Bus"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "臺南轉運站",
      "En": "Tainan Bus Station"
    },
    "DestinationStopName": {
      "Zh_tw": "麻豆轉運站",
      "En": "Madou Bus Station"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "24604",
      "StopName": {
        "Zh_tw": "臺南轉運站",
        "En": "Tainan Bus Station"
      }
    },
    "EndStop": {
      "StopID": "24622",
      "StopName": {
        "Zh_tw": "麻豆轉運站",
        "En": "Madou Bus Station"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1413",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1413",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1413.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1413",
    "RouteDistance": 28
  },
  {
    "RouteUID": "TNN1414",
    "RouteID": "1414",
    "RouteName": {
      "Zh_tw": "橘14",
      "En": "O14"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "16233",
        "OperatorName": {
          "Zh_tw": "漢程客運",
          "En": "Han-Cheng Bus Traffic Co., Ltd."
        },
        "OperatorCode": "HanCheng Bus"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "麻豆轉運站",
      "En": "Madou Bus Station"
    },
    "DestinationStopName": {
      "Zh_tw": "南科實中",
      "En": "Nanke International Experimental High School"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "25016",
      "StopName": {
        "Zh_tw": "麻豆轉運站",
        "En": "Madou Bus Station"
      }
    },
    "EndStop": {
      "StopID": "25029",
      "StopName": {
        "Zh_tw": "南科實中",
        "En": "Nanke International Experimental High School"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1414",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1414",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1414.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1414",
    "RouteDistance": 21.4
  },
  {
    "RouteUID": "TNN1420",
    "RouteID": "1420",
    "RouteName": {
      "Zh_tw": "橘20",
      "En": "O20"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "大內",
      "En": "Danei"
    },
    "DestinationStopName": {
      "Zh_tw": "玉井",
      "En": "Yujing"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "7375",
      "StopName": {
        "Zh_tw": "大內教會",
        "En": "Danei Church"
      }
    },
    "EndStop": {
      "StopID": "7393",
      "StopName": {
        "Zh_tw": "玉井站",
        "En": "Yujing Bus Station"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1420",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1420",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1420.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1420",
    "RouteDistance": 9.6
  },
  {
    "RouteUID": "TNN1421",
    "RouteID": "1421",
    "RouteName": {
      "Zh_tw": "橘21",
      "En": "O21"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "16202",
        "OperatorName": {
          "Zh_tw": "台一大車隊",
          "En": "Daisuki Taxi"
        },
        "OperatorCode": "Daisuki Taxi"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": true,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "玉井站",
      "En": "Yujing Bus Station"
    },
    "DestinationStopName": {
      "Zh_tw": "其子瓦、大內區公所",
      "En": "Cizihwa 、Danei District Office"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "24543",
      "StopName": {
        "Zh_tw": "玉井站",
        "En": "Yujing Bus Station"
      }
    },
    "EndStop": {
      "StopID": "24636",
      "StopName": {
        "Zh_tw": "大內區公所",
        "En": "Danei District Office"
      }
    },
    "IsCircular": true,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1421",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1421",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1421.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1421",
    "RouteDistance": 31.1
  },
  {
    "RouteUID": "TNN1500",
    "RouteID": "1500",
    "RouteName": {
      "Zh_tw": "黃幹線",
      "En": "Yellow"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      },
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": true,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "白河",
      "En": "Baihe"
    },
    "DestinationStopName": {
      "Zh_tw": "新營麻豆",
      "En": "Madou"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "7530",
      "StopName": {
        "Zh_tw": "白河站",
        "En": "Baihe Bus Station"
      }
    },
    "EndStop": {
      "StopID": "7582",
      "StopName": {
        "Zh_tw": "麻豆轉運站",
        "En": "Madou Bus Station"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1500",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1500",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1500.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1500",
    "RouteDistance": 31.1
  },
  {
    "RouteUID": "TNN1501",
    "RouteID": "1501",
    "RouteName": {
      "Zh_tw": "黃1",
      "En": "Y1"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "新營",
      "En": "Sinying"
    },
    "DestinationStopName": {
      "Zh_tw": "柳營六甲",
      "En": "Lioujia"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "23466",
      "StopName": {
        "Zh_tw": "新營轉運站",
        "En": "Sinying Bus Station"
      }
    },
    "EndStop": {
      "StopID": "7662",
      "StopName": {
        "Zh_tw": "臺南藝術大學",
        "En": "Tainan National University of the Arts"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1501",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1501",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1501.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1501",
    "RouteDistance": 27.4
  },
  {
    "RouteUID": "TNN1502",
    "RouteID": "1502",
    "RouteName": {
      "Zh_tw": "黃2",
      "En": "Y2"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "新營",
      "En": "Sinying"
    },
    "DestinationStopName": {
      "Zh_tw": "王爺宮",
      "En": "Wangye Temple"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "23454",
      "StopName": {
        "Zh_tw": "新營轉運站",
        "En": "Sinying Bus Station"
      }
    },
    "EndStop": {
      "StopID": "21322",
      "StopName": {
        "Zh_tw": "西口小瑞士",
        "En": "Sikou Little Swiss"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1502",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1502",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1502.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1502",
    "RouteDistance": 15.3
  },
  {
    "RouteUID": "TNN1503",
    "RouteID": "1503",
    "RouteName": {
      "Zh_tw": "黃3",
      "En": "Y3"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "新營",
      "En": "Sinying"
    },
    "DestinationStopName": {
      "Zh_tw": "果毅後",
      "En": "Guoyihou"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "23442",
      "StopName": {
        "Zh_tw": "新營轉運站",
        "En": "Sinying Bus Station"
      }
    },
    "EndStop": {
      "StopID": "16909",
      "StopName": {
        "Zh_tw": "德元埤",
        "En": "Deyuanbi"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1503",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1503",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1503.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1503",
    "RouteDistance": 21.4
  },
  {
    "RouteUID": "TNN1504",
    "RouteID": "1504",
    "RouteName": {
      "Zh_tw": "黃4",
      "En": "Y4"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "新營",
      "En": "Sinying"
    },
    "DestinationStopName": {
      "Zh_tw": "六甲",
      "En": "Lioujia"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "23430",
      "StopName": {
        "Zh_tw": "新營轉運站",
        "En": "Sinying Bus Station"
      }
    },
    "EndStop": {
      "StopID": "7835",
      "StopName": {
        "Zh_tw": "六甲",
        "En": "Lioujia"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1504",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1504",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1504.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1504",
    "RouteDistance": 16.3
  },
  {
    "RouteUID": "TNN1505",
    "RouteID": "1505",
    "RouteName": {
      "Zh_tw": "黃5",
      "En": "Y5"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "新營",
      "En": "Sinying"
    },
    "DestinationStopName": {
      "Zh_tw": "下營",
      "En": "Siaying"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "23412",
      "StopName": {
        "Zh_tw": "新營轉運站",
        "En": "Sinying Bus Station"
      }
    },
    "EndStop": {
      "StopID": "15714",
      "StopName": {
        "Zh_tw": "下營廟前",
        "En": "Siaying Temple"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1505",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1505",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1505.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1505",
    "RouteDistance": 19
  },
  {
    "RouteUID": "TNN1506",
    "RouteID": "1506",
    "RouteName": {
      "Zh_tw": "黃6",
      "En": "Y6"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "新營",
      "En": "Sinying"
    },
    "DestinationStopName": {
      "Zh_tw": "後壁",
      "En": "Houbi Train Station"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "23400",
      "StopName": {
        "Zh_tw": "新營轉運站",
        "En": "Sinying Bus Station"
      }
    },
    "EndStop": {
      "StopID": "7918",
      "StopName": {
        "Zh_tw": "後壁火車站",
        "En": "Houbi Train Station"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1506",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1506",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1506.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1506",
    "RouteDistance": 9.6
  },
  {
    "RouteUID": "TNN1507",
    "RouteID": "1507",
    "RouteName": {
      "Zh_tw": "黃7",
      "En": "Y7"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "新營",
      "En": "Sinying"
    },
    "DestinationStopName": {
      "Zh_tw": "青山",
      "En": "Cingshan"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "23360",
      "StopName": {
        "Zh_tw": "新營轉運站",
        "En": "Sinying Bus Station"
      }
    },
    "EndStop": {
      "StopID": "16337",
      "StopName": {
        "Zh_tw": "仙公廟",
        "En": "Siangong Temple"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1507",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1507",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1507.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1507",
    "RouteDistance": 9.6
  },
  {
    "RouteUID": "TNN1509",
    "RouteID": "1509",
    "RouteName": {
      "Zh_tw": "黃9",
      "En": "Y9"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "新營站",
      "En": "Sinying Bus Station"
    },
    "DestinationStopName": {
      "Zh_tw": "高鐵嘉義站",
      "En": "THSR Chiayi Station"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "8549",
      "StopName": {
        "Zh_tw": "新營站",
        "En": "Sinying Station"
      }
    },
    "EndStop": {
      "StopID": "16990",
      "StopName": {
        "Zh_tw": "故宮南院",
        "En": "Southern Branch of the National Palace Museum"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1509",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1509",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1509.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1509",
    "RouteDistance": 21
  },
  {
    "RouteUID": "TNN1510",
    "RouteID": "1510",
    "RouteName": {
      "Zh_tw": "黃10",
      "En": "Y10"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "後壁",
      "En": "Houbi"
    },
    "DestinationStopName": {
      "Zh_tw": "六重溪",
      "En": "Liouchong River"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "8000",
      "StopName": {
        "Zh_tw": "泰安宮",
        "En": "Taian Temple"
      }
    },
    "EndStop": {
      "StopID": "8480",
      "StopName": {
        "Zh_tw": "鎮安宮",
        "En": "Jhen-an Temple"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1510",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1510",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1510.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1510",
    "RouteDistance": 9.6
  },
  {
    "RouteUID": "TNN1511",
    "RouteID": "1511",
    "RouteName": {
      "Zh_tw": "黃11",
      "En": "Y11"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "白河",
      "En": "Baihe"
    },
    "DestinationStopName": {
      "Zh_tw": "青山",
      "En": "Cingshan"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "17270",
      "StopName": {
        "Zh_tw": "白河商工",
        "En": "P.H.V.S."
      }
    },
    "EndStop": {
      "StopID": "17280",
      "StopName": {
        "Zh_tw": "科尾",
        "En": "Kewei"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1511",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1511",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1511.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1511",
    "RouteDistance": 9.6
  },
  {
    "RouteUID": "TNN1512",
    "RouteID": "1512",
    "RouteName": {
      "Zh_tw": "黃12",
      "En": "Y12"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "白河",
      "En": "Baihe"
    },
    "DestinationStopName": {
      "Zh_tw": "關子嶺",
      "En": "Guanzihling"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "8118",
      "StopName": {
        "Zh_tw": "白河站",
        "En": "Baihe Bus Station"
      }
    },
    "EndStop": {
      "StopID": "8137",
      "StopName": {
        "Zh_tw": "關子嶺",
        "En": "Guanzihling"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1512",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1512",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1512.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1512",
    "RouteDistance": 9.6
  },
  {
    "RouteUID": "TNN1513",
    "RouteID": "1513",
    "RouteName": {
      "Zh_tw": "黃13",
      "En": "Y13"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "白河",
      "En": "Baihe"
    },
    "DestinationStopName": {
      "Zh_tw": "南寮",
      "En": "Nanliao"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "8428",
      "StopName": {
        "Zh_tw": "白河國中",
        "En": "Baihe Junior High School"
      }
    },
    "EndStop": {
      "StopID": "17555",
      "StopName": {
        "Zh_tw": "仙公廟",
        "En": "Siangong Temple"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1513",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1513",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1513.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1513",
    "RouteDistance": 9.6
  },
  {
    "RouteUID": "TNN1514",
    "RouteID": "1514",
    "RouteName": {
      "Zh_tw": "黃14",
      "En": "Y14"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "白河",
      "En": "Baihe"
    },
    "DestinationStopName": {
      "Zh_tw": "三層崎",
      "En": "Sancengci"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "8212",
      "StopName": {
        "Zh_tw": "白河站",
        "En": "Baihe Bus Station"
      }
    },
    "EndStop": {
      "StopID": "8234",
      "StopName": {
        "Zh_tw": "三層崎",
        "En": "Sancengci"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1514",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1514",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1514.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1514",
    "RouteDistance": 20.4
  },
  {
    "RouteUID": "TNN1515",
    "RouteID": "1515",
    "RouteName": {
      "Zh_tw": "黃15",
      "En": "Y15"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      },
      {
        "OperatorID": "16202",
        "OperatorName": {
          "Zh_tw": "台一大車隊",
          "En": "Daisuki Taxi"
        },
        "OperatorCode": "Daisuki Taxi"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "白河",
      "En": "Baihe"
    },
    "DestinationStopName": {
      "Zh_tw": "詔安厝",
      "En": "Shaoancuo"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "8258",
      "StopName": {
        "Zh_tw": "白河站",
        "En": "Baihe Bus Station"
      }
    },
    "EndStop": {
      "StopID": "8268",
      "StopName": {
        "Zh_tw": "詔安厝(二)",
        "En": "Shaoancuo(Il)"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1515",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1515",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1515.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1515",
    "RouteDistance": 9.6
  },
  {
    "RouteUID": "TNN1516",
    "RouteID": "1516",
    "RouteName": {
      "Zh_tw": "黃16",
      "En": "Y16"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "白河商工",
      "En": "P.H.V.S."
    },
    "DestinationStopName": {
      "Zh_tw": "隆田",
      "En": "Longtian"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "17207",
      "StopName": {
        "Zh_tw": "白河商工",
        "En": "P.H.V.S."
      }
    },
    "EndStop": {
      "StopID": "20402",
      "StopName": {
        "Zh_tw": "隆田火車站",
        "En": "Longtian Train Station"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1516",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1516",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1516.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1516",
    "RouteDistance": 27.5
  },
  {
    "RouteUID": "TNN1520",
    "RouteID": "1520",
    "RouteName": {
      "Zh_tw": "黃20",
      "En": "Y20"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "麻豆",
      "En": "Madou"
    },
    "DestinationStopName": {
      "Zh_tw": "林鳳營",
      "En": "Linfongying Train Station"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "8280",
      "StopName": {
        "Zh_tw": "麻豆轉運站",
        "En": "Madou Bus Station"
      }
    },
    "EndStop": {
      "StopID": "8303",
      "StopName": {
        "Zh_tw": "林鳳營火車站",
        "En": "Linfongying Train Station"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1520",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1520",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1520.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1520",
    "RouteDistance": 9.6
  },
  {
    "RouteUID": "TNN1600",
    "RouteID": "1600",
    "RouteName": {
      "Zh_tw": "紅幹線",
      "En": "Red"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": true,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "安工區",
      "En": "Anping Industrial Park"
    },
    "DestinationStopName": {
      "Zh_tw": "關廟龍崎",
      "En": "Guanmiao、Longci"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "15000",
      "StopName": {
        "Zh_tw": "安平工業區",
        "En": "Anping Industrial Park"
      }
    },
    "EndStop": {
      "StopID": "15050",
      "StopName": {
        "Zh_tw": "龍崎",
        "En": "Longci"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1600",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1600",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1600.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1600",
    "RouteDistance": 31.1
  },
  {
    "RouteUID": "TNN1601",
    "RouteID": "1601",
    "RouteName": {
      "Zh_tw": "紅1",
      "En": "R1"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "臺南轉運站",
      "En": "Tainan Bus Station"
    },
    "DestinationStopName": {
      "Zh_tw": "關廟",
      "En": "Guanmiao"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "8530",
      "StopName": {
        "Zh_tw": "臺南轉運站",
        "En": "Tainan Bus Station"
      }
    },
    "EndStop": {
      "StopID": "16768",
      "StopName": {
        "Zh_tw": "關廟轉運站",
        "En": "Guanmiao Bus Station"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1601",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1601",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1601.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1601",
    "RouteDistance": 27.4
  },
  {
    "RouteUID": "TNN1602",
    "RouteID": "1602",
    "RouteName": {
      "Zh_tw": "紅2",
      "En": "R2"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "臺南轉運站",
      "En": "Tainan Bus Station"
    },
    "DestinationStopName": {
      "Zh_tw": "關廟",
      "En": "Guanmiao"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "8528",
      "StopName": {
        "Zh_tw": "臺南轉運站",
        "En": "Tainan Bus Station"
      }
    },
    "EndStop": {
      "StopID": "16760",
      "StopName": {
        "Zh_tw": "關廟轉運站",
        "En": "Guanmiao Bus Station"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1602",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1602",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1602.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1602",
    "RouteDistance": 15.3
  },
  {
    "RouteUID": "TNN1603",
    "RouteID": "1603",
    "RouteName": {
      "Zh_tw": "紅3",
      "En": "R3"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "臺南轉運站",
      "En": "Tainan Bus Station"
    },
    "DestinationStopName": {
      "Zh_tw": "關廟",
      "En": "Guanmiao"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "15247",
      "StopName": {
        "Zh_tw": "臺南轉運站",
        "En": "Tainan Bus Station"
      }
    },
    "EndStop": {
      "StopID": "16800",
      "StopName": {
        "Zh_tw": "關廟轉運站",
        "En": "Guanmiao Bus Station"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1603",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1603",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1603.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1603",
    "RouteDistance": 21.4
  },
  {
    "RouteUID": "TNN1604",
    "RouteID": "1604",
    "RouteName": {
      "Zh_tw": "紅4",
      "En": "R4"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "臺南轉運站",
      "En": "Tainan Bus Station"
    },
    "DestinationStopName": {
      "Zh_tw": "奇美博物館",
      "En": "Chimei Museum"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "15333",
      "StopName": {
        "Zh_tw": "臺南轉運站",
        "En": "Tainan Bus Station"
      }
    },
    "EndStop": {
      "StopID": "16174",
      "StopName": {
        "Zh_tw": "奇美博物館",
        "En": "Chimei Museum"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1604",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1604",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1604.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1604",
    "RouteDistance": 16.3
  },
  {
    "RouteUID": "TNN1610",
    "RouteID": "1610",
    "RouteName": {
      "Zh_tw": "紅10",
      "En": "R10"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "關廟",
      "En": "Guanmiao"
    },
    "DestinationStopName": {
      "Zh_tw": "奇美醫院",
      "En": "Chi Mei Medical Center"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "16773",
      "StopName": {
        "Zh_tw": "關廟轉運站",
        "En": "Guanmiao Bus Station"
      }
    },
    "EndStop": {
      "StopID": "15429",
      "StopName": {
        "Zh_tw": "奇美醫院",
        "En": "Chi Mei Medical Center"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1610",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1610",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1610.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1610",
    "RouteDistance": 9.6
  },
  {
    "RouteUID": "TNN1611",
    "RouteID": "1611",
    "RouteName": {
      "Zh_tw": "紅11",
      "En": "R11"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      },
      {
        "OperatorID": "16253",
        "OperatorName": {
          "Zh_tw": "中華衛星台南車隊",
          "En": "Crown Transportation Co., Ltd"
        },
        "OperatorCode": "CrownTransportation"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "關廟",
      "En": "Guanmiao"
    },
    "DestinationStopName": {
      "Zh_tw": "牛埔農塘",
      "En": "Nioupu Eco-technology Park"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "16876",
      "StopName": {
        "Zh_tw": "關廟國中",
        "En": "Guanmiao Junior High School"
      }
    },
    "EndStop": {
      "StopID": "15495",
      "StopName": {
        "Zh_tw": "牛埔農塘",
        "En": "Nioupu Eco-technology Park"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1611",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1611",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1611.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1611",
    "RouteDistance": 9.6
  },
  {
    "RouteUID": "TNN1613",
    "RouteID": "1613",
    "RouteName": {
      "Zh_tw": "紅13",
      "En": "R13"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      },
      {
        "OperatorID": "16253",
        "OperatorName": {
          "Zh_tw": "中華衛星台南車隊",
          "En": "Crown Transportation Co., Ltd"
        },
        "OperatorCode": "CrownTransportation"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "關廟",
      "En": "Guanmiao"
    },
    "DestinationStopName": {
      "Zh_tw": "阿蓮",
      "En": "Alian"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "16791",
      "StopName": {
        "Zh_tw": "關廟轉運站",
        "En": "Guanmiao Bus Station"
      }
    },
    "EndStop": {
      "StopID": "15581",
      "StopName": {
        "Zh_tw": "阿蓮",
        "En": "Alian"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1613",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1613",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1613.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1613",
    "RouteDistance": 9.6
  },
  {
    "RouteUID": "TNN1614",
    "RouteID": "1614",
    "RouteName": {
      "Zh_tw": "紅14",
      "En": "R14"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "關廟",
      "En": "Guanmiao"
    },
    "DestinationStopName": {
      "Zh_tw": "長榮大學",
      "En": "Chang Jung Christian University"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "16775",
      "StopName": {
        "Zh_tw": "關廟轉運站",
        "En": "Guanmiao Bus Station"
      }
    },
    "EndStop": {
      "StopID": "16295",
      "StopName": {
        "Zh_tw": "長榮大學",
        "En": "Chang Jung Christian University"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1614",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1614",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1614.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1614",
    "RouteDistance": 9.6
  },
  {
    "RouteUID": "TNN1702",
    "RouteID": "1702",
    "RouteName": {
      "Zh_tw": "綠20-1",
      "En": "G20-1"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "16202",
        "OperatorName": {
          "Zh_tw": "台一大車隊",
          "En": "Daisuki Taxi"
        },
        "OperatorCode": "Daisuki Taxi"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "玉井",
      "En": "Yujing Bus Station"
    },
    "DestinationStopName": {
      "Zh_tw": "虎頭山",
      "En": "Hutoushan"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "20680",
      "StopName": {
        "Zh_tw": "玉井站",
        "En": "Yujing Bus Station"
      }
    },
    "EndStop": {
      "StopID": "20685",
      "StopName": {
        "Zh_tw": "虎頭山",
        "En": "Hutoushan"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1702",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1702",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1702.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1702",
    "RouteDistance": 4
  },
  {
    "RouteUID": "TNN1704",
    "RouteID": "1704",
    "RouteName": {
      "Zh_tw": "黃14-1",
      "En": "Y14-1"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "16202",
        "OperatorName": {
          "Zh_tw": "台一大車隊",
          "En": "Daisuki Taxi"
        },
        "OperatorCode": "Daisuki Taxi"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "白河",
      "En": "Baihe"
    },
    "DestinationStopName": {
      "Zh_tw": "甘宅內角",
      "En": "Neijiao"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "20730",
      "StopName": {
        "Zh_tw": "白河站",
        "En": "Baihe Bus Station"
      }
    },
    "EndStop": {
      "StopID": "20749",
      "StopName": {
        "Zh_tw": "內角",
        "En": "Neijiao"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1704",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1704",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1704.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1704",
    "RouteDistance": 8
  },
  {
    "RouteUID": "TNN1706",
    "RouteID": "1706",
    "RouteName": {
      "Zh_tw": "綠28",
      "En": "G28"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "16253",
        "OperatorName": {
          "Zh_tw": "中華衛星台南車隊",
          "En": "Crown Transportation Co., Ltd"
        },
        "OperatorCode": "CrownTransportation"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "左鎮果菜市場",
      "En": "Zuojhen Agricultural Product Market"
    },
    "DestinationStopName": {
      "Zh_tw": "草山里活動中心",
      "En": "Caoshan Vil. Community Center"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "22940",
      "StopName": {
        "Zh_tw": "左鎮果菜市場",
        "En": "Zuojhen Agricultural Product Market"
      }
    },
    "EndStop": {
      "StopID": "22969",
      "StopName": {
        "Zh_tw": "草山里活動中心",
        "En": "Caoshan Vil. Community Center"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1706",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1706",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1706.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1706",
    "RouteDistance": 15
  },
  {
    "RouteUID": "TNN1707",
    "RouteID": "1707",
    "RouteName": {
      "Zh_tw": "黃10-1",
      "En": "Y10-1"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "16253",
        "OperatorName": {
          "Zh_tw": "中華衛星台南車隊",
          "En": "Crown Transportation Co., Ltd"
        },
        "OperatorCode": "CrownTransportation"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "白河",
      "En": "Houbi"
    },
    "DestinationStopName": {
      "Zh_tw": "檳榔腳",
      "En": "Binlangjiao"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "22658",
      "StopName": {
        "Zh_tw": "白河站",
        "En": "Baihe Bus Station"
      }
    },
    "EndStop": {
      "StopID": "22714",
      "StopName": {
        "Zh_tw": "白河站",
        "En": "Baihe Bus Station"
      }
    },
    "IsCircular": true,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1707",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1707",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1707.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1707",
    "RouteDistance": 13.3
  },
  {
    "RouteUID": "TNN1708",
    "RouteID": "1708",
    "RouteName": {
      "Zh_tw": "黃12-1",
      "En": "Y12-1"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "16253",
        "OperatorName": {
          "Zh_tw": "中華衛星台南車隊",
          "En": "Crown Transportation Co., Ltd"
        },
        "OperatorCode": "CrownTransportation"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "白河",
      "En": "Baihe"
    },
    "DestinationStopName": {
      "Zh_tw": "福顯宮",
      "En": "Fusian Temple"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "22715",
      "StopName": {
        "Zh_tw": "白河站",
        "En": "Baihe Bus Station"
      }
    },
    "EndStop": {
      "StopID": "22724",
      "StopName": {
        "Zh_tw": "福顯宮",
        "En": "Fusian Temple"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1708",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1708",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1708.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1708",
    "RouteDistance": 9.6
  },
  {
    "RouteUID": "TNN1710",
    "RouteID": "1710",
    "RouteName": {
      "Zh_tw": "紅12",
      "En": "R12"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "16253",
        "OperatorName": {
          "Zh_tw": "中華衛星台南車隊",
          "En": "Crown Transportation Co., Ltd"
        },
        "OperatorCode": "CrownTransportation"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "關廟",
      "En": "Guanmiao"
    },
    "DestinationStopName": {
      "Zh_tw": "烏山頭",
      "En": "Wushantou"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "22826",
      "StopName": {
        "Zh_tw": "關廟國中",
        "En": "Guanmiao Junior High School"
      }
    },
    "EndStop": {
      "StopID": "22848",
      "StopName": {
        "Zh_tw": "烏山頭",
        "En": "Wushantou"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1710",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1710",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1710.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1710",
    "RouteDistance": 9.6
  },
  {
    "RouteUID": "TNN1801",
    "RouteID": "1801",
    "RouteName": {
      "Zh_tw": "紅3-1",
      "En": "R3-1"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "保安轉運站",
      "En": "Baoan Bus Station"
    },
    "DestinationStopName": {
      "Zh_tw": "奇美環線",
      "En": "Taisuco"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "11266",
      "StopName": {
        "Zh_tw": "保安轉運站",
        "En": "Baoan Bus Station"
      }
    },
    "EndStop": {
      "StopID": "11274",
      "StopName": {
        "Zh_tw": "保安轉運站",
        "En": "Baoan Bus Station"
      }
    },
    "IsCircular": true,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1801",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1801",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1801.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1801",
    "RouteDistance": 7.5
  },
  {
    "RouteUID": "TNN1802",
    "RouteID": "1802",
    "RouteName": {
      "Zh_tw": "黃6-1",
      "En": "Y6-1"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "新營",
      "En": "Sinying"
    },
    "DestinationStopName": {
      "Zh_tw": "白河",
      "En": "Baihe"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "23388",
      "StopName": {
        "Zh_tw": "新營轉運站",
        "En": "Sinying Bus Station"
      }
    },
    "EndStop": {
      "StopID": "16835",
      "StopName": {
        "Zh_tw": "白河站",
        "En": "Baihe Bus Station"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1802",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1802",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1802.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1802",
    "RouteDistance": 12
  },
  {
    "RouteUID": "TNN1803",
    "RouteID": "1803",
    "RouteName": {
      "Zh_tw": "77-1",
      "En": "77-1"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10001",
        "OperatorName": {
          "Zh_tw": "府城客運",
          "En": "Tainan City Bus"
        },
        "OperatorCode": "TainanCityBus",
        "OperatorNo": "0803"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": true,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "免費接駁路線",
      "En": "Free Shuttle Bus"
    },
    "DepartureStopName": {
      "Zh_tw": "安平漁人碼頭",
      "En": "Anping Fisherman’s Wharf"
    },
    "DestinationStopName": {
      "Zh_tw": "安平環線",
      "En": "Anping Fisherman’s Wharf"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "16855",
      "StopName": {
        "Zh_tw": "安平漁人碼頭",
        "En": "Anping Fisherman’s Wharf"
      }
    },
    "EndStop": {
      "StopID": "16867",
      "StopName": {
        "Zh_tw": "安平漁人碼頭",
        "En": "Anping Fisherman’s Wharf"
      }
    },
    "IsCircular": true,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1803",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1803",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1803.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1803",
    "RouteDistance": 8.6
  },
  {
    "RouteUID": "TNN1805",
    "RouteID": "1805",
    "RouteName": {
      "Zh_tw": "黃12-2",
      "En": "Y12-2"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "關子嶺",
      "En": "Guanzihling"
    },
    "DestinationStopName": {
      "Zh_tw": "假日公車",
      "En": "Guanzihling"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "17102",
      "StopName": {
        "Zh_tw": "關子嶺",
        "En": "Guanzihling"
      }
    },
    "EndStop": {
      "StopID": "17116",
      "StopName": {
        "Zh_tw": "關子嶺",
        "En": "Guanzihling"
      }
    },
    "IsCircular": true,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1805",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1805",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1805.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1805",
    "RouteDistance": 9.9
  },
  {
    "RouteUID": "TNN1807",
    "RouteID": "1807",
    "RouteName": {
      "Zh_tw": "橘10-1",
      "En": "O10-1"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "麻豆轉運站",
      "En": "Madou Bus Station"
    },
    "DestinationStopName": {
      "Zh_tw": "勞動力發展署",
      "En": "Workforce Development Agency"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "17290",
      "StopName": {
        "Zh_tw": "麻豆轉運站",
        "En": "Madou Bus Station"
      }
    },
    "EndStop": {
      "StopID": "17312",
      "StopName": {
        "Zh_tw": "勞動力發展署",
        "En": "Workforce Development Agency"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1807",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1807",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1807.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1807",
    "RouteDistance": 51
  },
  {
    "RouteUID": "TNN1808",
    "RouteID": "1808",
    "RouteName": {
      "Zh_tw": "橘4-1",
      "En": "O4-1"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "善化轉運站",
      "En": "Shanhua Bus Station"
    },
    "DestinationStopName": {
      "Zh_tw": "勞動力發展署",
      "En": "Workforce Development Agency"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "17365",
      "StopName": {
        "Zh_tw": "善化轉運站",
        "En": "Shanhua Bus Station"
      }
    },
    "EndStop": {
      "StopID": "17376",
      "StopName": {
        "Zh_tw": "勞動力發展署",
        "En": "Workforce Development Agency"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1808",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1808",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1808.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1808",
    "RouteDistance": 10
  },
  {
    "RouteUID": "TNN1809",
    "RouteID": "1809",
    "RouteName": {
      "Zh_tw": "黃11-1",
      "En": "Y11-1"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "白河",
      "En": "Baihe Bus Station"
    },
    "DestinationStopName": {
      "Zh_tw": "東原國中",
      "En": "Dongyuan Junior High School"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "9340",
      "StopName": {
        "Zh_tw": "白河站",
        "En": "Baihe Bus Station"
      }
    },
    "EndStop": {
      "StopID": "9432",
      "StopName": {
        "Zh_tw": "竹圍埔",
        "En": "Jhuweipu"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1809",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1809",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1809.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1809",
    "RouteDistance": 25.5
  },
  {
    "RouteUID": "TNN1810",
    "RouteID": "1810",
    "RouteName": {
      "Zh_tw": "棕3-1",
      "En": "BR3-1"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "新營",
      "En": "Sinying"
    },
    "DestinationStopName": {
      "Zh_tw": "鐵線里",
      "En": "Tiesian Vil."
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "9459",
      "StopName": {
        "Zh_tw": "新營站",
        "En": "Sinying Station"
      }
    },
    "EndStop": {
      "StopID": "9479",
      "StopName": {
        "Zh_tw": "鐵線里",
        "En": "Tiesian Vil."
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1810",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1810",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1810.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1810",
    "RouteDistance": 15
  },
  {
    "RouteUID": "TNN1811",
    "RouteID": "1811",
    "RouteName": {
      "Zh_tw": "77-2",
      "En": "77-2"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10001",
        "OperatorName": {
          "Zh_tw": "府城客運",
          "En": "Tainan City Bus"
        },
        "OperatorCode": "TainanCityBus",
        "OperatorNo": "0803"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": true,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "免費接駁路線",
      "En": "Free Shuttle Bus"
    },
    "DepartureStopName": {
      "Zh_tw": "安平漁人碼頭",
      "En": "Anping Fisherman’s Wharf"
    },
    "DestinationStopName": {
      "Zh_tw": "興達港觀光魚市",
      "En": "Singda Harbor Fish Market"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "17636",
      "StopName": {
        "Zh_tw": "安平漁人碼頭",
        "En": "Anping Fisherman’s Wharf"
      }
    },
    "EndStop": {
      "StopID": "17653",
      "StopName": {
        "Zh_tw": "興達港觀光魚市",
        "En": "Singda Harbor Fish Market"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1811",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1811",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1811.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1811",
    "RouteDistance": 19
  },
  {
    "RouteUID": "TNN1813",
    "RouteID": "1813",
    "RouteName": {
      "Zh_tw": "黃11-2",
      "En": "Y11-2"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "白河",
      "En": "Baihe"
    },
    "DestinationStopName": {
      "Zh_tw": "橫路休息站",
      "En": "Henglu Rest Area"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "17745",
      "StopName": {
        "Zh_tw": "白河站",
        "En": "Baihe Bus Station"
      }
    },
    "EndStop": {
      "StopID": "20513",
      "StopName": {
        "Zh_tw": "雙溪庄",
        "En": "Shuangsijhuang"
      }
    },
    "IsCircular": true,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1813",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1813",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1813.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1813",
    "RouteDistance": 30
  },
  {
    "RouteUID": "TNN1814",
    "RouteID": "1814",
    "RouteName": {
      "Zh_tw": "橘11-1",
      "En": "O11-1"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "下營、麻豆",
      "En": "Siaying、Madou"
    },
    "DestinationStopName": {
      "Zh_tw": "臺南轉運站",
      "En": "Tainan Bus Station"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "21630",
      "StopName": {
        "Zh_tw": "下營區公所",
        "En": "Siaying District Office"
      }
    },
    "EndStop": {
      "StopID": "21493",
      "StopName": {
        "Zh_tw": "臺南轉運站",
        "En": "Tainan Bus Station"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1814",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1814",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1814.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1814",
    "RouteDistance": 28.4
  },
  {
    "RouteUID": "TNN1815",
    "RouteID": "1815",
    "RouteName": {
      "Zh_tw": "黃16-1",
      "En": "Y16-1"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10190",
        "OperatorName": {
          "Zh_tw": "新營客運",
          "En": "Sinying Bus"
        },
        "OperatorCode": "SinyingBus",
        "OperatorNo": "1306"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "白河站",
      "En": "Baihe Bus Station"
    },
    "DestinationStopName": {
      "Zh_tw": "高鐵嘉義站",
      "En": "THSR Chiayi Station"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "21866",
      "StopName": {
        "Zh_tw": "白河站",
        "En": "Baihe Bus Station"
      }
    },
    "EndStop": {
      "StopID": "21836",
      "StopName": {
        "Zh_tw": "高鐵嘉義站",
        "En": "THSR Chiayi Station"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1815",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1815",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1815.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1815",
    "RouteDistance": 31.5
  },
  {
    "RouteUID": "TNN1816",
    "RouteID": "1816",
    "RouteName": {
      "Zh_tw": "橘9-1",
      "En": "O9-1"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "16233",
        "OperatorName": {
          "Zh_tw": "漢程客運",
          "En": "Han-Cheng Bus Traffic Co., Ltd."
        },
        "OperatorCode": "HanCheng Bus"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "佳里站",
      "En": "Jiali Bus Station"
    },
    "DestinationStopName": {
      "Zh_tw": "高鐵嘉義站",
      "En": "THSR Chiayi Station"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "22482",
      "StopName": {
        "Zh_tw": "佳里站",
        "En": "Jiali Bus Station"
      }
    },
    "EndStop": {
      "StopID": "22495",
      "StopName": {
        "Zh_tw": "高鐵嘉義站",
        "En": "THSR Chiayi Station"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1816",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1816",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1816.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1816",
    "RouteDistance": 47.3
  },
  {
    "RouteUID": "TNN1818",
    "RouteID": "1818",
    "RouteName": {
      "Zh_tw": "山博行假日公車",
      "En": "Mountain Line & Museum Route"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": true,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "左鎮化石園區",
      "En": "Zuojhen Fossil Park"
    },
    "DestinationStopName": {
      "Zh_tw": "南瀛天文園區",
      "En": "Tainan Astronomical Education Area"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "23119",
      "StopName": {
        "Zh_tw": "左鎮化石園區",
        "En": "Zuojhen Fossil Park"
      }
    },
    "EndStop": {
      "StopID": "23118",
      "StopName": {
        "Zh_tw": "南瀛天文園區",
        "En": "Tainan Astronomical Education Area"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1818",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1818",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1818.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1818",
    "RouteDistance": 25.5
  },
  {
    "RouteUID": "TNN1819",
    "RouteID": "1819",
    "RouteName": {
      "Zh_tw": "紅1-1",
      "En": "R1-1"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10160",
        "OperatorName": {
          "Zh_tw": "興南客運",
          "En": "ShingNan Bus"
        },
        "OperatorCode": "ShingNanBus",
        "OperatorNo": "1601"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": false,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "依里程計費",
      "En": "Kilometer Charges"
    },
    "DepartureStopName": {
      "Zh_tw": "關廟轉運站",
      "En": "Guanmiao Bus Station"
    },
    "DestinationStopName": {
      "Zh_tw": "旺萊公園",
      "En": "Wanglai Park"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "23298",
      "StopName": {
        "Zh_tw": "關廟轉運站",
        "En": "Guanmiao Bus Station"
      }
    },
    "EndStop": {
      "StopID": "23299",
      "StopName": {
        "Zh_tw": "旺萊公園",
        "En": "Wanglai Park"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1819",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1819",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1819.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1819",
    "RouteDistance": 1.4
  },
  {
    "RouteUID": "TNN1901",
    "RouteID": "1901",
    "RouteName": {
      "Zh_tw": "雙層巴士",
      "En": "Sightseeing Bus"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10001",
        "OperatorName": {
          "Zh_tw": "府城客運",
          "En": "Tainan City Bus"
        },
        "OperatorCode": "TainanCityBus",
        "OperatorNo": "0803"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": true,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "單日票：全票500元、優待票250元。4小時票：全票300元、優待票150元。",
      "En": "Adults Ticket: One-day ticket = NT$500, Four hours ticket = NT$300. Children/Senior Ticket: One-day "
    },
    "DepartureStopName": {
      "Zh_tw": "火車北站",
      "En": "Tainan Train Station(North)"
    },
    "DestinationStopName": {
      "Zh_tw": "火車北站",
      "En": "Tainan Train Station(North)"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "17473",
      "StopName": {
        "Zh_tw": "臺南火車站(北站)",
        "En": "Tainan Train Station(North)"
      }
    },
    "EndStop": {
      "StopID": "17485",
      "StopName": {
        "Zh_tw": "臺南火車站(北站)",
        "En": "Tainan Train Station(North)"
      }
    },
    "IsCircular": true,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1901",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1901",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1901.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1901",
    "RouteDistance": 19.6
  },
  {
    "RouteUID": "TNN9111",
    "RouteID": "9111",
    "RouteName": {
      "Zh_tw": "111",
      "En": "111"
    },
    "RouteLongName": {},
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "16233",
        "OperatorName": {
          "Zh_tw": "漢程客運",
          "En": "Han-Cheng Bus Traffic Co., Ltd."
        },
        "OperatorCode": "HanCheng Bus"
      }
    ],
    "RouteType": 11,
    "ServiceType": {
      "IsFreeBus": false,
      "IsTaiwanTripBus": false,
      "IsTourBus": true,
      "IsTouristBus": false,
      "IsBRTBus": false,
      "IsMedicalBus": false,
      "IsNightBus": false,
      "IsTrunkBus": false,
      "IsMetroShuttleBus": false,
      "IsTHSRShuttleBus": false,
      "IsTRAShuttleBus": false,
      "IsAirportShuttleBus": false,
      "IsActivityShuttleBus": false
    },
    "TicketPriceDescription": {
      "Zh_tw": "固定票價",
      "En": "Fixed fare"
    },
    "DepartureStopName": {
      "Zh_tw": "小西門",
      "En": "Siaosimen"
    },
    "DestinationStopName": {
      "Zh_tw": "高雄國際航空站",
      "En": "Kaohsiung International Airport"
    },
    "FareBufferZoneDescription": {},
    "StartStop": {
      "StopID": "22162",
      "StopName": {
        "Zh_tw": "小西門(小港機場快線)",
        "En": "Siaosimen(Tainan Express)"
      }
    },
    "EndStop": {
      "StopID": "22185",
      "StopName": {
        "Zh_tw": "高雄國際航空站",
        "En": "Kaohsiung International Airport"
      }
    },
    "IsCircular": false,
    "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=9111",
    "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=9111",
    "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/9111.jpg",
    "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=9111",
    "RouteDistance": 64
  }
]}

for (let i = 0; i < 143; i++) {
  // console.log(jsonFile.Routes[i]);
  pool.query(
    `INSERT INTO allRoute (RouteUID, RouteID, RouteName_zh, RouteName_en, HasSubRoutes, 
      TicketPriceDescription_zh, TicketPriceDescription_en, DepartureStopName_zh, DepartureStopName_en, 
      StartStop_zh, StartStop_en, EndStop_zh, EndStop_en, RouteURL, LiveBusURL, RouteImageURL, FareURL)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)`,
    [jsonFile.Routes[i].RouteUID, jsonFile.Routes[i].RouteID, jsonFile.Routes[i].RouteName.Zh_tw, 
    jsonFile.Routes[i].RouteName.En, jsonFile.Routes[i].HasSubRoutes,
    jsonFile.Routes[i].TicketPriceDescription.Zh_tw, jsonFile.Routes[i].TicketPriceDescription.En, 
    jsonFile.Routes[i].DepartureStopName.Zh_tw, jsonFile.Routes[i].DepartureStopName.En, 
    jsonFile.Routes[i].StartStop.StopName.Zh_tw, jsonFile.Routes[i].StartStop.StopName.En, 
    jsonFile.Routes[i].EndStop.StopName.Zh_tw, jsonFile.Routes[i].EndStop.StopName.En, 
    jsonFile.Routes[i].RouteURL, jsonFile.Routes[i].LiveBusURL, jsonFile.Routes[i].RouteMapImageURL, 
    jsonFile.Routes[i].FareURL]
  );
}