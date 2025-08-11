import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
// 자동으로 export default 로 template이 내보내진다
// 이것을 무조건 '파일 이름'으로 불러온다

const pinia = createPinia();


createApp(App).use(pinia).mount('#app')
