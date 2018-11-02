import shareIcon from '@/assets/image/shareicon.jpg'

var apiDomain = '/agweb';  // 默认接口是不带前缀的

// 如果环境是在activitytest，要带有前缀
var apiDomain = '/agweb';

if (/activitytest/.test(location.origin)) {
    location.pathname.split("/").forEach(item => {
        if (/stargate_/.test(item)) {
            apiDomain = `/${item}`
        }
    })
}

var config = {
    projectTitle: '',
    storageScope: 'test',
    defaultShareOption: {
        title: '',
        desc: '',
        imgUrl: 'shareIcon',
        link: `${location.origin}${location.pathname}`
    },
    apiDomain: apiDomain
}

export default config;