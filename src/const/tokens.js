const TOKENS = [
    // {
    //     PAIR: "FLR_USDT",
    //     SYMBOL: "FLR",
    //     NETS: [{
    //         URL: "https://www.bitrue.com/kline-api/publicUSDT.json?command=returnTicker",
    //         TYPE: "obj-arr"
    //     }]
    // },
    {
        PAIR: "XRP_USDT",
        SYMBOL: "XRP",
        NETS: [{
            URL: "https://www.bitrue.com/kline-api/publicUSDT.json?command=returnTicker",
            TYPE: "obj-arr"
        },
        {
            URL: "https://api.binance.com/api/v3/ticker/price?symbol=XRPUSDT",
            TYPE: "simple"
        },
        {
            URL: "https://openapi-v2.kucoin.com/api/v1/market/stats?symbol=XRP-USDT",
            TYPE: "object1"
        },
        {
            URL: "https://api.gateio.ws/api/v4/spot/tickers",
            TYPE: "array"
        },
        {
            URL: "https://api.huobi.pro/market/detail/merged?symbol=xrpusdt",
            TYPE: "object3"
        },
        {
            URL: "https://ftx.com/api/markets/XRP/USD",
            TYPE: "object2"
        }]
    },
    {
        PAIR: "LTC_USDT",
        SYMBOL: "LTC",
        NETS: [{
            URL: "https://www.bitrue.com/kline-api/publicUSDT.json?command=returnTicker",
            TYPE: "obj-arr"
        },
        {
            URL: "https://api.binance.com/api/v3/ticker/price?symbol=LTCUSDT",
            TYPE: "simple"
        },
        {
            URL: "https://openapi-v2.kucoin.com/api/v1/market/stats?symbol=LTC-USDT",
            TYPE: "object1"
        },
        {
            URL: "https://api.gateio.ws/api/v4/spot/tickers",
            TYPE: "array"
        },
        {
            URL: "https://ftx.com/api/markets/LTC/USD",
            TYPE: "object2"
        },
        {
            URL: "https://api.huobi.pro/market/detail/merged?symbol=ltcusdt",
            TYPE: "object3"
        },
        {
            URL: "https://api.coinbase.com/v2/prices/LTC-USD/spot",
            TYPE: "special"
        },
        {
            URL: "https://www.bitstamp.net/api/v2/ticker/ltcusd",
            TYPE: "simple"
        }]
    },
    {
        PAIR: "DOGE_USDT",
        SYMBOL: "DOGE",
        NETS: [{
            URL: "https://www.bitrue.com/kline-api/publicUSDT.json?command=returnTicker",
            TYPE: "obj-arr"
        },
        {
            URL: "https://api.binance.com/api/v3/ticker/price?symbol=DOGEUSDT",
            TYPE: "simple"
        },
        {
            URL: "https://openapi-v2.kucoin.com/api/v1/market/stats?symbol=DOGE-USDT",
            TYPE: "object1"
        },
        {
            URL: "https://api.gateio.ws/api/v4/spot/tickers",
            TYPE: "array"
        },
        {
            URL: "https://api.huobi.pro/market/detail/merged?symbol=dogeusdt",
            TYPE: "object3"
        },
        {
            URL: "https://api.coinbase.com/v2/prices/DOGE-USD/spot",
            TYPE: "special"
        },
        {
            URL: "https://ftx.com/api/markets/DOGE/USD",
            TYPE: "object2"
        }]
    },
    {
        PAIR: "XLM_USDT",
        SYMBOL: "XLM",
        NETS: [{
            URL: "https://www.bitrue.com/kline-api/publicUSDT.json?command=returnTicker",
            TYPE: "obj-arr"
        },
        {
            URL: "https://api.binance.com/api/v3/ticker/price?symbol=XLMUSDT",
            TYPE: "simple"
        },
        {
            URL: "https://openapi-v2.kucoin.com/api/v1/market/stats?symbol=XLM-USDT",
            TYPE: "object1"
        },
        {
            URL: "https://api.huobi.pro/market/detail/merged?symbol=xlmusdt",
            TYPE: "object3"
        },
        {
            URL: "https://api.coinbase.com/v2/prices/XLM-USD/spot",
            TYPE: "special"
        },
        {
            URL: "https://api.gateio.ws/api/v4/spot/tickers",
            TYPE: "array"
        }]
    }
];

export default TOKENS;