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
    },
    // {
    //     PAIR: "BTC_USDT",
    //     SYMBOL: "BTC",
    //     NETS:[{
    //         URL: "https://api.coinbase.com/v2/prices/BTC-USD/spot",
    //         TYPE: "special"
    //     },
    //     {
    //         URL: "https://api.pro.coinbase.com/products/BTC-USD/book",
    //         TYPE: "book"
    //     },
    //     {
    //         URL: "https://api.pro.coinbase.com/products/BTC-USDT/book",
    //         TYPE: "book"
    //     },
    //     {
    //         URL: "https://api.pro.coinbase.com/products/BTC-USDC/book",
    //         TYPE: "book"
    //     },
    //     {
    //         URL: "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT",
    //         TYPE: "simple"
    //     },
    //     {
    //         URL: "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDC",
    //         TYPE: "simple"
    //     },
    //     {
    //         URL: "https://api.binance.com/api/v3/ticker/price?symbol=BTCBUSD",
    //         TYPE: "simple"
    //     },
    //     {
    //         URL: "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDP",
    //         TYPE: "simple"
    //     },
    //     {
    //         URL: "https://api.binance.com/api/v3/ticker/price?symbol=BTCTUSD",
    //         TYPE: "simple"
    //     },
    //     {
    //         URL: "https://api.binance.com/api/v3/ticker/price?symbol=BTCDAI",
    //         TYPE: "simple"
    //     },
    //     {
    //         URL: "https://ftx.com/api/markets/BTC/USD",
    //         TYPE: "simple"
    //     },
    //     {
    //         URL: "https://ftx.com/api/markets/BTC/USDT",
    //         TYPE: "simple"
    //     },
    //     {
    //         URL: "https://api.huobi.pro/market/detail/merged?symbol=xlmusdt",
    //         TYPE: "object3"
    //     },
    //     {
    //         URL: "https://api.huobi.pro/market/detail/merged?symbol=btcusdc",
    //         TYPE: "object3"
    //     },
    //     {
    //         URL: "https://api.huobi.pro/market/detail/merged?symbol=btchusd",
    //         TYPE: "object3"
    //     },
    //     {
    //         URL: "https://openapi-v2.kucoin.com/api/v1/market/stats?symbol=BTC-USDT",
    //         TYPE: "obj-arr"
    //     },
    //     {
    //         URL: "https://openapi-v2.kucoin.com/api/v1/market/stats?symbol=BTC-USDC",
    //         TYPE: "obj-arr"
    //     },
    //     {
    //         URL: "https://openapi-v2.kucoin.com/api/v1/market/stats?symbol=BTC-TUSD",
    //         TYPE: "obj-arr"
    //     },
    //     {
    //         URL: "https://openapi-v2.kucoin.com/api/v1/market/stats?symbol=BTC-DAI",
    //         TYPE: "obj-arr"
    //     },
    //     {
    //         URL: "https://api.gateio.ws/api/v4/spot/order_book?currency_pair=BTC_USD",
    //         TYPE: "obj-arr"
    //     },
    //     {
    //         URL: "https://api.gateio.ws/api/v4/spot/order_book?currency_pair=BTC_USDT",
    //         TYPE: "obj-arr"
    //     },
    //     {
    //         URL: "https://www.bitstamp.net/api/v2/ticker/btcusd",
    //         TYPE: "obj-arr"
    //     },
    //     {
    //         URL: "https://www.bitstamp.net/api/v2/ticker/btcusdt",
    //         TYPE: "obj-arr"
    //     },
    //     {
    //         URL: "https://www.bitstamp.net/api/v2/ticker/btcusdc",
    //         TYPE: "obj-arr"
    //     }]
    // }
    {
        PAIR: "ETH_USDT",
        SYMBOL: "ETH",
        NETS: [{
            URL: "https://api.coinbase.com/v2/prices/ETH-USD/spot",
            TYPE: "special"
        },
        {
            URL: "https://api.pro.coinbase.com/products/ETH-USD/book",
            TYPE: "book"
        },
        {
            URL: "https://api.pro.coinbase.com/products/ETH-USDT/book",
            TYPE: "book"
        },
        {
            URL: "https://api.pro.coinbase.com/products/ETH-USDC/book",
            TYPE: "book"
        },
        {
            URL: "https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT",
            TYPE: "simple"
        },
        {
            URL: "https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDP",
            TYPE: "simple"
        },
        {
            URL: "https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDC",
            TYPE: "simple"
        },
        {
            URL: "https://api.binance.com/api/v3/ticker/price?symbol=ETHBUSD",
            TYPE: "simple"
        },
        {
            URL: "https://api.binance.com/api/v3/ticker/price?symbol=ETHTUSD",
            TYPE: "simple"
        },
        {
            URL: "https://api.binance.com/api/v3/ticker/price?symbol=ETHDAI",
            TYPE: "simple"
        }]
    },
    {
        PAIR: "FIL_USDT",
        SYMBOL: "FIL",
        NETS: [{
            URL: "https://api.coinbase.com/v2/prices/FIL-USD/spot",
            TYPE: "special"
        },
        {
            URL: "https://api.pro.coinbase.com/products/FIL-USD/book",
            TYPE: "book"
        },
        {
            URL: "https://api.binance.com/api/v3/ticker/price?symbol=FILUSDT",
            TYPE: "simple"
        },
        {
            URL: "https://api.binance.com/api/v3/ticker/price?symbol=FILBUSD",
            TYPE: "simple"
        },
        {
            URL: "https://api.huobi.pro/market/detail/merged?symbol=filusdt",
            TYPE: "object3"
        },
    ]
    },
    {
        PAIR: "DGB_USDT",
        SYMBOL: "DGB",
        NETS: [{
            URL: "https://api.binance.com/api/v3/ticker/price?symbol=DGBUSDT",
            TYPE: "simple"
        },
        {
            URL: "https://openapi-v2.kucoin.com/api/v1/market/stats?symbol=DGB-USDT",
            TYPE: "object1"
        },
        {
            URL: "https://api.binance.com/api/v3/ticker/price?symbol=DGBUSDT",
            TYPE: "simple"
        },
        {
            URL: "https://api.binance.com/api/v3/ticker/price?symbol=DGBBUSD",
            TYPE: "simple"
        },
        {
            URL: "https://api.bittrex.com/v3/markets/dgb-usd/ticker",
            TYPE: "bittrex"
        },
    ]
    },
    {
        PAIR: "ADA_USDT",
        SYMBOL: "ADA",
        NETS: [{
            URL: "https://api.coinbase.com/v2/prices/ADA-USD/spot",
            TYPE: "special"
        },
        {
            URL: "https://api.pro.coinbase.com/products/ADA-USD/book",
            TYPE: "book"
        },
        {
            URL: "https://api.pro.coinbase.com/products/ADA-USDC/book",
            TYPE: "book"
        },
        {
            URL: "https://api.binance.com/api/v3/ticker/price?symbol=ADAUSDT",
            TYPE: "simple"
        },
        {
            URL: "https://api.binance.com/api/v3/ticker/price?symbol=ADAUSDC",
            TYPE: "simple"
        },
        {
            URL: "https://api.binance.com/api/v3/ticker/price?symbol=ADABUSD",
            TYPE: "simple"
        },
        {
            URL: "https://api.binance.com/api/v3/ticker/price?symbol=ADATUSD",
            TYPE: "simple"
        }]
    },
    {
        PAIR: "BCH_USDT",
        JOIN_NAME: "BCHUSDT",
        SYMBOL: "BCH",
        NETS: [{
            URL: "https://api.coinbase.com/v2/prices/BCH-USD/spot",
            TYPE: "special"
        },
        {
            URL: "https://api.pro.coinbase.com/products/BCH-USD/book",
            TYPE: "book"
        },
        {
            URL: "https://api.binance.com/api/v3/ticker/price?symbol=BCHUSDT",
            TYPE: "simple"
        },
        {
            URL: "https://api.binance.com/api/v3/ticker/price?symbol=BCHUSDC",
            TYPE: "simple"
        },
        {
            URL: "https://api.binance.com/api/v3/ticker/price?symbol=BCHBUSD",
            TYPE: "simple"
        },
        {
            URL: "https://api.huobi.pro/market/detail/merged?symbol=bchusdt",
            TYPE: "object3"
        },
        {
            URL: "https://api.huobi.pro/market/detail/merged?symbol=bchhusd",
            TYPE: "object3"
        },
        {
            URL: "https://openapi-v2.kucoin.com/api/v1/market/stats?symbol=BCH-USDT",
            TYPE: "object1"
        },
        {
            URL: "https://openapi-v2.kucoin.com/api/v1/market/stats?symbol=BCH-USDC",
            TYPE: "object1"
        },
        {
            URL: "https://api.gateio.ws/api/v4/spot/order_book?currency_pair=BCH_USD",
            TYPE: "order_book"
        },
        {
            URL: "https://api.gateio.ws/api/v4/spot/order_book?currency_pair=BCH_USDT",
            TYPE: "order_book"
        },
        {
            URL: "https://ftx.com/api/markets/BCH/USD",
            TYPE: "object2"
        },
        {
            URL: "https://ftx.com/api/markets/BCH/USDT",
            TYPE: "object2"
        },
        {
            URL: "https://www.bitstamp.net/api/v2/ticker/bchusd",
            TYPE: "simple"
        },
        // {
        //     URL: "https://api.kraken.com/0/public/Ticker?pair=BCHUSD",
        //     TYPE: "kraken"
        // },
        {
            URL: "https://api.kraken.com/0/public/Ticker?pair=BCHUSDT",
            TYPE: "kraken"
        },
        {
            URL: "https://api.liquid.com/products/39",
            TYPE: "liquid"
        },
        {
            URL: "https://api.bittrex.com/v3/markets/bch-usd/ticker",
            TYPE: "bittrex"
        },
        {
            URL: "https://api.bittrex.com/v3/markets/bch-usdt/ticker",
            TYPE: "bittrex"
        },
        {
            URL: "https://www.bitrue.com/kline-api/publicUSDT.json?command=returnTicker",
            TYPE: "obj-arr"
        },
        {
            URL: "https://api.crypto.com/v2/public/get-ticker?instrument_name=BCH_USDT",
            TYPE: "crypto"
        },
        {
            URL: "https://api.zb.work/data/v1/ticker?market=bch_usdt",
            TYPE: "zb"
        },
        {
            URL: "https://www.okex.com/api/spot/v3/instruments/BCH-USDT/ticker",
            TYPE: "okex"
        },
        {
            URL: "https://www.okex.com/api/spot/v3/instruments/BCH-USDC/ticker",
            TYPE: "okex"
        },
        {
            URL: "https://www.okex.com/api/spot/v3/instruments/BCH-USDK/ticker",
            TYPE: "okex"
        },
        {
            URL: "https://ascendex.com/api/pro/v1/ticker?symbol=BCH/USDT",
            TYPE: "ascendex"
        },
        {
            URL: "https://api.wazirx.com/api/v2/tickers/bchusdt",
            TYPE: "zb"
        },
        {
            URL: "https://api.pro.changelly.com/api/3/public/ticker/bchusdt",
            TYPE: "okex"
        },
        {
            URL: "https://api.pro.changelly.com/api/3/public/ticker/bchdai",
            TYPE: "okex"
        },
        {
            URL: "https://api.gemini.com/v1/pubticker/bchusd",
            TYPE: "okex"
        },
        {
            URL: "https://api.blockchain.com/v3/exchange/tickers/BCH-USD",
            TYPE: "blockchain"
        },
        {
            URL: "https://publicapi.gokumarket.com/exchange/getCurrencyPairLatestData?currency_pair=BCH_USDT",
            TYPE: "gokumarket"
        },
        {
            URL: "https://public-api.stormgain.com/api/v1/cg/spot/tickers",
            TYPE: "stormgain"
        },
        {
            URL: "https://api.exmo.com/v1.1/ticker",
            TYPE: "exmo"
        }]
    },
    {
        PAIR: "ALGO_USDT",
        JOIN_NAME: "ALGOUSD",
        SYMBOL: "ALGO",
        NETS: [{
            URL: "https://api.coinbase.com/v2/prices/ALGO-USD/spot",
            TYPE: "special"
        },
        {
            URL: "https://api.pro.coinbase.com/products/ALGO-USD/book",
            TYPE: "book"
        },
        {
            URL: "https://api.binance.com/api/v3/ticker/price?symbol=ALGOUSDT",
            TYPE: "simple"
        },
        {
            URL: "https://api.binance.com/api/v3/ticker/price?symbol=ALGOUSDC",
            TYPE: "simple"
        },
        {
            URL: "https://api.binance.com/api/v3/ticker/price?symbol=ALGOBUSD",
            TYPE: "simple"
        },
        {
            URL: "https://api.huobi.pro/market/detail/merged?symbol=algousdt",
            TYPE: "object3"
        },
        {
            URL: "https://api.huobi.pro/market/detail/merged?symbol=algohusd",
            TYPE: "object3"
        },
        {
            URL: "https://openapi-v2.kucoin.com/api/v1/market/stats?symbol=ALGO-USDT",
            TYPE: "object1"
        },
        {
            URL: "https://api.gateio.ws/api/v4/spot/order_book?currency_pair=ALGO_USDT",
            TYPE: "order_book"
        },
        {
            URL: "https://ftx.com/api/markets/ALGO-PERP",
            TYPE: "object2"
        },
        {
            URL: "https://www.bitstamp.net/api/v2/ticker/algousd",
            TYPE: "simple"
        },
        {
            URL: "https://api.kraken.com/0/public/Ticker?pair=ALGOUSD",
            TYPE: "kraken"
        },
        {
            URL: "https://api.bittrex.com/v3/markets/algo-usd/ticker",
            TYPE: "bittrex"
        },
        {
            URL: "https://api.bittrex.com/v3/markets/algo-usdt/ticker",
            TYPE: "bittrex"
        },
        {
            URL: "https://api.crypto.com/v2/public/get-ticker?instrument_name=ALGO_USDT",
            TYPE: "crypto"
        },
        {
            URL: "https://api.crypto.com/v2/public/get-ticker?instrument_name=ALGO_USDC",
            TYPE: "crypto"
        },
        {
            URL: "https://api.zb.work/data/v1/ticker?market=algo_usdt",
            TYPE: "zb"
        },
        {
            URL: "https://www.okex.com/api/spot/v3/instruments/ALGO-USDT/ticker",
            TYPE: "okex"
        },
        {
            URL: "https://ascendex.com/api/pro/v1/ticker?symbol=ALGO/USDT",
            TYPE: "ascendex"
        },
        {
            URL: "https://api.wazirx.com/api/v2/tickers/algousdt",
            TYPE: "zb"
        },
        {
            URL: "https://www.bitrue.com/kline-api/publicUSDT.json?command=returnTicker",
            TYPE: "obj-arr"
        },
        {
            URL: "https://www.okcoin.com/api/spot/v3/instruments/ALGO-USD/ticker",
            TYPE: "okex"
        },
        {
            URL: "https://api.blockchain.com/v3/exchange/tickers/ALGO-USD",
            TYPE: "blockchain"
        },
        {
            URL: "https://api.exmo.com/v1.1/ticker",
            TYPE: "exmo"
        },
        {
            URL: "https://trade-api.coinlist.co/v1/symbols/ALGO-USD",
            TYPE: "trade"
        },
        {
            URL: "https://api.binance.me/api/v3/ticker/price?symbol=ALGOUSDC",
            TYPE: "simple"
        },
        {
            URL: "https://api.binance.me/api/v3/ticker/price?symbol=ALGOUSDT",
            TYPE: "simple"
        },
        {
            URL: "https://api.binance.me/api/v3/ticker/price?symbol=ALGOBUSD",
            TYPE: "simple"
        },
        {
            URL: "https://api.hitbtc.com/api/3/public/ticker/ALGOUSDT",
            TYPE: "okex"
        },
        {
            URL: "https://api-cloud.bitmart.com/spot/v1/ticker?symbol=ALGO_USDT",
            TYPE: "bitmart"
        },
        {
            URL: "https://api.latoken.com/v2/ticker/ALGO/USDT",
            TYPE: "latoken"
        },
        // {
        //     URL: "https://api.bibox.com/v3/mdata/ticker?pair=ALGO_USDT",
        //     TYPE: "bibox"
        // },
        {
            URL: "https://kline.zbg.com/api/data/v1/ticker?marketName=algo_usdt",
            TYPE: "kline"
        },
        {
            URL: "https://apiv1.decoin.io/market/get-ticker/ALGO-USDT",
            TYPE: "decoin"
        },
        {
            URL: "https://www.mexc.com/open/api/v2/market/ticker?symbol=ALGO_USDT",
            TYPE: "mexc"
        },
        {
            URL: "https://api.bhex.com/openapi/quote/v1/ticker/price?symbol=ALGOUSDT",
            TYPE: "simple"
        },
        {
            URL: "https://api.alterdice.com/v1/public/ticker?pair=ALGOUSDT",
            TYPE: "object1"
        },
        {
            URL: "https://big.one/api/v3/asset_pairs/ALGO-USDT/ticker",
            TYPE: "big"
        },
        {
            URL: "https://api.vcc.exchange/v3/ticker",
            TYPE: "vcc"
        }]
    },
];

export default TOKENS;