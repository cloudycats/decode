//Sat Oct 18 2025 10:22:57 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  "use strict";
  const iilII1lI = $request.url;
  let ilil111I;
  try {
    const iI1iiiII = JSON.parse($response.body);
    if (iilII1lI.includes("/kugouvip/v2/batch_union_vipinfo")) ilil111I = JSON.stringify(Ili1I1(iI1iiiII));else {
      if (iilII1lI.includes("/kugouvip/v1/batch_union_vipinfo")) ilil111I = JSON.stringify(Ii1Iii1i(iI1iiiII));else {
        if (iilII1lI.includes("/mobile/vipinfo")) ilil111I = JSON.stringify(iii111iI(iI1iiiII));else {
          if (iilII1lI.includes("/v1/get_union_vip") || iilII1lI.includes("/v1/vipuser_sub")) ilil111I = JSON.stringify(ll1Iiiil(iI1iiiII));else {
            if (iilII1lI.includes("/v1/get_res_privilege")) ilil111I = JSON.stringify(IIiIilII(iI1iiiII));else iilII1lI.includes("/kugouvip/v1/vipuser_sub") ? ilil111I = JSON.stringify(IilIlIIi(iI1iiiII)) : ilil111I = $response.body;
          }
        }
      }
    }
  } catch (I1I1l1I) {
    console.log("酷狗VIP修改脚本错误: " + I1I1l1I);
    ilil111I = $response.body;
  }
  $done({
    "body": ilil111I
  });
  function Ili1I1(llIlIIli) {
    const l1li1iIi = JSON.parse(JSON.stringify(llIlIIli));
    if (!l1li1iIi.data || !l1li1iIi.data.busi_vip || !l1li1iIi.data.main_vip) return l1li1iIi;
    for (const lIllli1 in l1li1iIi.data.busi_vip) {
      const IlIliii = l1li1iIi.data.busi_vip[lIllli1];
      Array.isArray(IlIliii) && IlIliii.forEach(i111i1Il => {
        switch (i111i1Il.product_type) {
          case "dvip":
            i111i1Il.vip_end_time = "2026-10-17 11:40:25";
            i111i1Il.paid_vip_expire_time = "2026-10-17 08:01:11";
            i111i1Il.is_paid_vip = 1;
            break;
          case "qvip":
            i111i1Il.paid_vip_expire_time = "2026-10-17 08:01:11";
            i111i1Il.is_paid_vip = 1;
            break;
          case "svip":
            i111i1Il.vip_end_time = "2026-10-17 08:01:11";
            i111i1Il.paid_vip_expire_time = "2026-10-17 08:01:11";
            i111i1Il.is_vip = 1;
            i111i1Il.y_type = 1;
            i111i1Il.is_paid_vip = 1;
            break;
          case "tvip":
            i111i1Il.vip_end_time = "2027-10-17 08:01:11";
            i111i1Il.paid_vip_expire_time = "2026-10-17 08:01:11";
            i111i1Il.is_paid_vip = 1;
            break;
        }
      });
    }
    for (const illIlIl1 in l1li1iIi.data.main_vip) {
      const lilliIIi = l1li1iIi.data.main_vip[illIlIl1];
      if (lilliIIi && typeof lilliIIi === "object") {
        lilliIIi.vip_y_endtime = "2026-10-17 08:01:11";
        lilliIIi.vip_end_time = "2026-10-17 08:01:11";
        lilliIIi.su_vip_end_time = "2026-10-17 08:01:11";
        lilliIIi.is_vip = 1;
        lilliIIi.listen_end_time = "2026-10-17 08:01:11";
        lilliIIi.dual_su_vip_end_time = "2026-10-17 08:01:11";
        lilliIIi.vip_type = 3;
        lilliIIi.su_vip_y_endtime = "2026-10-17 08:01:11";
      }
    }
    return l1li1iIi;
  }
  function Ii1Iii1i(il1IlII1) {
    const lil11 = JSON.parse(JSON.stringify(il1IlII1));
    if (!lil11.data) return lil11;
    if (lil11.data.busi_vip_list && Array.isArray(lil11.data.busi_vip_list)) {
      {
        let ilIlll1i = false,
          il1Iili1 = null;
        if (lil11.data.busi_vip_list.length > 0) {
          il1Iili1 = lil11.data.busi_vip_list[0].userid;
        } else lil11.data.main_vip_list && lil11.data.main_vip_list.length > 0 && (il1Iili1 = lil11.data.main_vip_list[0].userid);
        lil11.data.busi_vip_list.forEach(I1Ili1l1 => {
          {
            if (I1Ili1l1.product_type === "svip") {
              I1Ili1l1.vip_end_time = "2026-10-17 08:01:11";
              I1Ili1l1.vip_begin_time = "2026-05-26 00:10:03";
              I1Ili1l1.paid_vip_expire_time = "2026-10-17 08:01:11";
              I1Ili1l1.is_vip = 1;
              I1Ili1l1.y_type = 2;
              I1Ili1l1.is_paid_vip = 1;
            }
            if (I1Ili1l1.product_type === "ssvip") {
              {
                ilIlll1i = true;
                I1Ili1l1.vip_end_time = "2026-10-17 08:01:11";
                I1Ili1l1.paid_vip_expire_time = "2026-10-17 08:01:11";
                I1Ili1l1.is_vip = 1;
                I1Ili1l1.y_type = 1;
                I1Ili1l1.is_paid_vip = 1;
              }
            }
          }
        });
        !ilIlll1i && il1Iili1 && lil11.data.busi_vip_list.push({
          "latest_product_id": "",
          "purchased_ios_type": 0,
          "vip_end_time": "2026-10-17 08:01:11",
          "vip_clearday": "",
          "vip_begin_time": "2025-10-17 08:01:11",
          "vip_limit_quota": {
            "total": 600
          },
          "userid": il1Iili1,
          "paid_vip_expire_time": "2026-10-17 08:01:11",
          "busi_type": "concept",
          "purchased_type": 0,
          "product_type": "ssvip",
          "is_vip": 1,
          "y_type": 1,
          "is_paid_vip": 1
        });
      }
    }
    if (lil11.data.main_vip_list && Array.isArray(lil11.data.main_vip_list)) {
      lil11.data.main_vip_list.forEach(iliIIiII => {
        iliIIiII.su_vip_y_endtime = "2026-10-17 08:01:11";
        iliIIiII.vip_type = 3;
        iliIIiII.m_y_endtime = "2026-10-17 08:01:11";
        iliIIiII.vip_end_time = "2026-10-17 08:01:11";
        iliIIiII.m_end_time = "2026-10-17 08:01:11";
        iliIIiII.user_y_type = 2;
        iliIIiII.m_type = 1;
        iliIIiII.y_type = 1;
        iliIIiII.is_vip = 1;
        iliIIiII.user_type = 2;
        iliIIiII.su_vip_end_time = "2026-10-17 08:01:11";
        iliIIiII.vip_y_endtime = "2026-10-17 08:01:11";
        iliIIiII.svip_level = 4;
      });
    }
    lil11.data.time && (lil11.data.time = 1760659981);
    return lil11;
  }
  function iii111iI(l1il1ili) {
    const llIi1liI = JSON.parse(JSON.stringify(l1il1ili));
    if (!llIi1liI.data || !llIi1liI.error) return llIi1liI;
    const lIIl1iil = llIi1liI.data;
    lIIl1iil.vip_type = 1;
    lIIl1iil.vip_y_endtime = "2026-10-17 08:01:11";
    lIIl1iil.su_vip_y_endtime = "2026-10-17 08:01:11";
    lIIl1iil.h_end_time = "2026-10-17 08:01:11";
    lIIl1iil.vip_end_time = "2026-10-17 08:01:11";
    lIIl1iil.roam_end_time = "2026-10-17 08:01:11";
    lIIl1iil.m_y_endtime = "2026-10-17 08:01:11";
    lIIl1iil.is_vip = 1;
    lIIl1iil.h_begin_time = "2026-10-17 08:01:11";
    lIIl1iil.su_vip_end_time = "2026-10-17 08:01:11";
    lIIl1iil.m_end_time = "2026-10-17 08:01:11";
    lIIl1iil.dual_su_vip_end_time = "2026-10-17 08:01:11";
    lIIl1iil.autoVipType = 1;
    lIIl1iil.promise && (lIIl1iil.promise.end_time = "2026-10-17 08:01:11");
    const IllIIiII = llIi1liI.error;
    IllIIiII.vip_type = 2;
    IllIIiII.vip_y_endtime = "2026-10-17 08:01:11";
    IllIIiII.su_vip_y_endtime = "2026-10-17 08:01:11";
    IllIIiII.h_end_time = "2026-10-17 08:01:11";
    IllIIiII.vip_end_time = "2026-10-17 08:01:11";
    IllIIiII.roam_end_time = "2026-10-17 08:01:11";
    IllIIiII.m_y_endtime = "2026-10-17 08:01:11";
    IllIIiII.is_vip = 1;
    IllIIiII.su_vip_end_time = "2026-10-17 08:01:11";
    IllIIiII.m_end_time = "2026-10-17 08:01:11";
    IllIIiII.dual_su_vip_end_time = "2026-10-17 08:01:11";
    IllIIiII.listen_end_time = "2026-10-17 08:01:11";
    IllIIiII.promise && (IllIIiII.promise.end_time = "2026-10-17 08:01:11");
    lIIl1iil.servertime && (lIIl1iil.servertime = "2025-10-17 08:24:55");
    IllIIiII.servertime && (IllIIiII.servertime = "2025-10-17 08:24:55");
    return llIi1liI;
  }
  function ll1Iiiil(IiilIiIi) {
    const Il11ilii = JSON.parse(JSON.stringify(IiilIiIi));
    if (!Il11ilii.data) return Il11ilii;
    const IIlI1iIl = Il11ilii.data;
    IIlI1iIl.vip_type = 2;
    IIlI1iIl.m_y_endtime = "2026-10-17 08:01:11";
    IIlI1iIl.vip_end_time = "2026-10-17 08:01:11";
    IIlI1iIl.m_end_time = "2026-10-17 08:01:11";
    IIlI1iIl.is_vip = 1;
    IIlI1iIl.user_type = 2;
    IIlI1iIl.su_vip_end_time = "2026-10-17 08:01:11";
    IIlI1iIl.vip_y_endtime = "2026-10-17 08:01:11";
    IIlI1iIl.svip_level = 4;
    IIlI1iIl.busi_vip && Array.isArray(IIlI1iIl.busi_vip) && IIlI1iIl.busi_vip.forEach(Ililili1 => {
      Ililili1.vip_end_time = "2026-10-17 08:01:11";
      Ililili1.paid_vip_expire_time = "2026-10-17 08:01:11";
      Ililili1.is_paid_vip = 1;
      Ililili1.y_type = 1;
      switch (Ililili1.product_type) {
        case "tvip":
          break;
        case "qvip":
          break;
        case "dvip":
          break;
        case "svip":
          Ililili1.is_vip = 2;
          break;
      }
    });
    return Il11ilii;
  }
  function IIiIilII(ilIlill) {
    const iillIi1i = JSON.parse(JSON.stringify(ilIlill));
    iillIi1i.userinfo && (iillIi1i.userinfo.m_type = 3, iillIi1i.userinfo.vip_type = 3);
    iillIi1i.vip_user_type = 3;
    return iillIi1i;
  }
  function IilIlIIi(Ii11IIll) {
    const li1lliI = JSON.parse(JSON.stringify(Ii11IIll));
    li1lliI.data && li1lliI.data.hasOwnProperty("mid_repeat") && (li1lliI.data.mid_repeat = 1);
    return li1lliI;
  }
})();