import Vue from 'vue'
import axios from 'axios'
import router from './router'

const axiosInstance = axios.create({
	baseURL : 'http://172.20.10.12:8080',
	headers : {
		'Content-Type' : 'application/json'
	},
	withCredentials:true,
	timeout:5000
})

axiosInstance.interceptors.response.use(
	response => {
		if(response.data.errorCode === 10000){
			
		};
		return response;
	},
	error => {
		if(error){

		}
		return Promise.reject(error);
	}
);
export default axiosInstance;