export const MARK_READ = {
  action: 'FrmCrNoti',
  method: 'markRead',
  data: [
    {
      operatorid: '', // user?.operatorid
      isread: 'Y',
      start: 0,
      limit: 1000,
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const UPDATE_READ_NOTI = {
  action: 'FrmCrNoti',
  method: 'updOpd',
  data: [
    {
      recordid: '230322-1423248572478-0EB6',
      operatorid: 'VTH@PDT',
      isread: 'Y',
    },
  ],
  type: 'rpc',
  tid: 159,
};

export const GET_NOTIFICATION = {
  action: 'FrmCrNoti',
  method: 'getByOpd',
  data: [
    {
      start: 0,
      limit: 15,
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_MY_TRANSACTION_NOTI = {
  action: 'FrmCrNoti',
  method: 'getByOpd',
  data: [
    {
      start: 0,
      limit: 15,
      formid: 'MLH',
    },
  ],
  type: 'rpc',
  tid: 1,
};
