export const menuItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: '교회 소개',
    submenu:[
      {
        title: '교회 소개 및 비전',
        url: 'vision',
      },
      {
        title:'섬기는 이들',
        url:'serve',
      },
      {
        title:'오시는 길',
        url:'direction'
      }
    ],
  },
  {
    title:'예배 안내',
    submenu:[
      {
        title: '예배 시간 안내',
        url: 'time',
      },
      {
        title: '주일 설교',
        url:'sermon',
      },
      {
        title: '교회 소식',
        url: 'news',
      },
    ],
  },
  {
    title: '교회 일터',
    submenu:[
      {
        title:'예배 일터',
        url:'worship',
        submenu: [
          {
            title: '찬양대',
            url: 'choir',
          },
          {
            title:'마하나임',
            url:'mahanaim',
          },
        ],
      },
      {
        title: '교우 일터',
        url: 'fellow',
      },
      {
        title: '관리 일터',
        url: 'maintenance ',
      },
      {
        title: '선교 일터',
        url: 'mission',
      },
      {
        title:'주일 학교',
        submenu:[
          {
            title: '유아부',
            url: 'kindergarten'
          },
          {
            title: '어린이부',
            url: 'children',
          },
          {
            title: '중고등부',
            url: 'teenagers',
          },
        ],
      },
      {
        title: '한글 학교',
        url: 'korean',
      },
    ],
  },
  {
    title:'성도의 교제',
    submenu:[
      {
        title:'사랑방',
        url:'sarang',
      },
      {
        title:'예그리나 청년부',
        url:'youngadult',
      },
      {
        title:'게시판',
        url:'post',
      },
      {
        title:'Gallery',
        url:'gallery',
      },
    ],
  },
  {
    title: '교회 일정',
    url: 'calendar',
  },
  {
    title: '온라인헌금',
    url: 'donation',
  }
];
