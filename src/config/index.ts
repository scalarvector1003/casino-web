const SERVER_API = "http://localhost:8000"

const config = {
  api: {
    SIGN_IN: SERVER_API + "/api/users/login",
    SIGN_UP: SERVER_API + "/api/users/register",
    BANK_LIST: SERVER_API + "/api/deposit/getBank",
    DEPOSIT : SERVER_API + "/api/deposit/addMoney",
    QUICK_WITHDRAW: SERVER_API + "/api/withdraw/quick-withdraw",
    TRANSFER : SERVER_API + "/api/transfer/transferMoney",
    GET_SYSCONFIG: SERVER_API + "/api/transfer/getSysConfig",
    GET_SPORTS_DATA: SERVER_API + "/api/get_item_date"
    BET_FT : SERVER_API + "/api/sport/bet_ft"
  },
};

export default config;
