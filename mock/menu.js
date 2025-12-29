const sidebarMenu = [
  {
    key: "inbox",
    tab: t("inbox"),
    icon: BellSVG,
    active: AppModel.data.payload.tab === "inbox",
    exec: () => (AppModel.data.payload = { tab: "inbox" }),
  },
  {
    key: "balance",
    tab: t("balance"),
    icon: BalanceSVG,
    isExpand: false,
    subMenus: [
      {
        key: "deposit",
        tab: t("deposit"),
        icon: DepositSVG,
        active: false,
        exec: () => (AppModel.data.payload = { tab: "deposit" }),
      },
      {
        key: "withdraw",
        tab: t("withdraw"),
        icon: WithdrawSVG,
        active: false,
        exec: () => (AppModel.data.payload = { tab: "withdraw" }),
      },
      {
        key: "transfer",
        tab: t("transfer"),
        icon: TransferSVG,
        active: false,
        exec: () => (AppModel.data.payload = { tab: "transfer" }),
      },
      {
        key: "record",
        tab: t("record"),
        icon: RecordSVG,
        active: false,
        exec: () => (AppModel.data.payload = { tab: "record" }),
      },
    ],
  },
  {
    key: "profiles",
    tab: t("profile"),
    icon: ProfileSVG,
    isExpand: false,
    subMenus: [
      {
        key: "profile",
        tab: t("profile"),
        icon: ProfileSVG,
        active: false,
        exec: () => (AppModel.data.payload = { tab: "profile" }),
      },
      {
        key: "change_password",
        tab: t("change_password"),
        icon: ChangePwdSVG,
        active: false,
        exec: () => (AppModel.data.payload = { tab: "change_password" }),
      },
      {
        key: "bank",
        tab: t("bank"),
        icon: BankSVG,
        active: false,
        exec: () => (AppModel.data.payload = { tab: "bank" }),
      },
    ],
  },
  {
    key: "promotions",
    tab: t("promotions"),
    icon: PromoSVG,
    isExpand: false,
    subMenus: [
      {
        key: "vip",
        tab: t("vip"),
        icon: VipSVG,
        active: false,
        exec: () => (AppModel.data.payload = { tab: "vip" }),
      },
      {
        key: "referral",
        tab: t("referral"),
        icon: ReferralSVG,
        active: false,
        exec: () => (AppModel.data.payload = { tab: "referral" }),
      },
      {
        key: "voucher",
        tab: t("voucher"),
        icon: VoucherSVG,
        active: false,
        exec: () => (AppModel.data.payload = { tab: "voucher" }),
      },
    ],
  },
];
export default sidebarMenu;
