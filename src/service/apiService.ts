class ApiService {
    private readonly PATH = 'https://biz.nanosemantics.ru/api/2.1/json/Chat.';
    private readonly UUID = '772c9859-4dd3-4a0d-b87d-d76b9f43cfa4';

    initialization<T>(): void {
        console.log('click');
    }
}

const apiService = new ApiService();

export default apiService;