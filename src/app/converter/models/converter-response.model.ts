export class ConverterResponse {
    constructor(
        public success: any,
        public timestamp: any,
        public base: string,
        public date: string,
        public rates: any
    ) {}
}

// {"base":"USD", "date":"2017-03-08", "rates":{"BRL":3.1405}}

/*
{
    "success": true,
    "timestamp": 1519296206,
    "base": "USD",
    "date": "2020-06-11",
    "rates": {
        "GBP": 0.72007,
        "JPY": 107.346001,
        "EUR": 0.813399,
    }
}   
*/