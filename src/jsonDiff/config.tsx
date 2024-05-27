import type { SourceJsonItem} from './index'
export const preData = {
    "person": {
      "name": "Alice",
      "age": 25,
      "isStudent": true,
      "address": {
        "street": "456 Elm St",
        "city": "Sometowns",
        "country": "Canada",
        "coordinates": {
          "latitude": 43.6532,
          "longitude": -79.3832
        }
      },
    },
    "interests": [
        {
            "name": "Reading",
            "type": "Indoor"
        },
        {
            "name": "Hiking",
            "type": "Outdoors",
            "locations": [
            {
                "name": "main Peak",
                "altitude": 40000
            },
            {
                "name": "Forest Traiddddl",
                "altitude": 80088888
            }
            ]
        }
    ],
  }


export const curData = {
    "person": {
      "name": "Alice2",
      "age": 25,
      "isStudent": true,
      "address": {
        "street": "456 Elm St",
        "city": "Sometowns牛逼",
        "country": "Canada",
        "coordinates": {
          "latitude": 43.6532,
          "longitude": -79.3832
        }
      },
    },
    "interests": [
        {
            "name": "Reading",
            "type": "Indoor"
        },
        {
            "name": "Hiking",
            "type": "Outdoor",
            "locations": [
            {
                "name": "<Mount222></Mount222>ain Peak",
                "altitude": 40000
            },
            {
                "name": "Forest Traiddddl",
                "altitude": 80088888
            }
            ]
        }
    ],
  }

export const sourceJsonMap: SourceJsonItem[] = [
    {
        dataIndex: 'person',
        title: '人群',
        childrenSourceJson: [
            {
                dataIndex: 'name',
                title: '姓名',
            },
            {
                dataIndex: 'age',
                title: '年龄',
            },
            {
                dataIndex: 'isStudent',
                title: '是否是学生',
            },
            {
                dataIndex: 'address',
                title: '地址',
                handelDiff: (preNode, curNode) => {
                    const {street:preName, city: preAltitude} =  preNode;
                    const {street:curName, city: curAltitude} =  curNode;
                    if(preName + preAltitude !== curName + curAltitude) return true
                    return false;
                },
                childrenSourceJson: [
                    {
                        dataIndex: 'street',
                        title: '街道',
                    },
                    {
                        dataIndex: 'city',
                        title: '城市',
                    },
                    {
                        dataIndex: 'country',
                        title: '国家',
                    },
                    {
                        dataIndex: 'coordinates',
                        title: '详细地址',
                        childrenSourceJson:[{
                            dataIndex: "longitude",
                            title: '门牌号'
                        }]
                    },
                ]
            },
        ]
    },
    {
        dataIndex: 'interests',
        title: '兴趣',
        childrenSourceJson:[
            {
                dataIndex: 'name',
                title: '名称'
            },
            {
                dataIndex: 'type',
                title: '类型'
            },
            {
                dataIndex: 'locations',
                title: '地址',
                childrenSourceJson: [
                    {
                        dataIndex:'name',
                        title: '地名',
                    },
                    {
                        dataIndex:'altitude',
                        title: '距离'
                    }
                ]
            }
        ]
    }
]
