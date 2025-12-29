const payment_config = {
  page_title: "快速電子錢包存款 (Quick E-Wallet Deposit)",
  selected_vendor: null,
  vendors: [
    {
      id: 100,
      name: "TRUSTPAY (網際威信)",
      code: "TRUSTPAY",
      logo: "https://example.com/logo/trustpay.png",
      channels: [
        {
          id: "TRUSTPAY_EWALLET",
          name: "E-Wallet 快付",
          mode: "iframe",
          select_type: "block",
          min: 10,
          max: 1000,
          fee: "0%",
        },
        {
          id: "TRUSTPAY_BANK_TRANSFER",
          name: "銀行轉帳 (大額)",
          mode: "iframe",
          select_type: "block",
          min: 50,
          max: 100000,
          fee: "0%",
        },
      ],
    },
    {
      id: 200,
      name: "SUREPAY (便捷支付)",
      code: "SUREPAY",
      logo: "https://example.com/logo/surepay.png",
      channels: [
        {
          id: "SUREPAY_QRCODE",
          name: "QR Code 掃碼支付",
          mode: "_blank",
          select_type: "block",
          min: 20,
          max: 5000,
          fee: "1%",
        },
      ],
    },
    {
      id: 300,
      name: "TRUEPAY (真實支付)",
      code: "TRUEPAY",
      logo: "https://example.com/logo/truepay.png",
      channels: [
        {
          id: "TRUEPAY_CREDIT",
          name: "信用卡/簽帳卡",
          mode: "redirect",
          select_type: "dropdown",
          min: 50,
          max: 50000,
          fee: "2%",
        },
        {
          id: "TRUEPAY_VIRTUAL_ACC",
          name: "虛擬帳號 (ATM)",
          mode: "iframe",
          select_type: "dropdown",
          min: 100,
          max: 30000,
          fee: "0%",
        },
        {
          id: "TRUEPAY_WALLET",
          name: "指定電子錢包",
          mode: "iframe",
          select_type: "dropdown",
          min: 10,
          max: 800,
          fee: "0%",
        },
      ],
    },
    {
      id: 400,
      name: "DGPAY2 (數位金流)",
      code: "DGPAY2",
      logo: "https://example.com/logo/dgpay2.png",
      channels: [
        {
          id: "DGPAY2_CRYPTO",
          name: "加密貨幣 (USDT)",
          mode: "_blank",
          select_type: "block",
          min: 1000,
          max: 200000,
          fee: "0.5%",
        },
      ],
    },
  ],
};

export default payment_config