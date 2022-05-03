const _window = globalThis["unsafeWindow"];
if(_window.location.href.includes("hp.com"))console.log("132134");
if(_window.location.href.includes("hp.com"))
(globalThis["unsafeWindow"]["webpackJsonphpid-ui-frontend"] =
globalThis["unsafeWindow"]["webpackJsonphpid-ui-frontend"] || []).push([
    [0],
    {
        1478: function (e, t, r) {},
        1485: function (e, t, r) {},
        1486: function (e, t, r) {},
        1487: function (e, t, r) {},
        1488: function (e, t, r) {},
        1489: function (e, t, r) {},
        1490: function (e, t, r) {},
        1491: function (e, t, r) {},
        1492: function (e, t, r) {},
        1493: function (e, t, r) {},
        1494: function (e, t, r) {},
        1495: function (e, t, r) {},
        1496: function (e, t, r) {},
        1497: function (e, t, r) {},
        1498: function (e, t, r) {},
        1499: function (e, t, r) {},
        1500: function (e, t, r) {},
        1501: function (e, t, r) {},
        1502: function (e, t, r) {},
        1503: function (e, t, r) {},
        1505: function (e, t, r) {},
        1506: function (e, t, r) {},
        1507: function (e, t, r) {},
        1508: function (e, t, r) {},
        1509: function (e, t, r) {},
        1512: function (e, t, r) {},
        1513: function (e, t, r) {},
        1514: function (e, t, r) {},
        1515: function (e, t, r) {},
        1516: function (e, t, r) {},
        1517: function (e, t, r) {},
        1518: function (e, t, r) {},
        1519: function (e, t, r) {},
        1520: function (e, t, r) {},
        1521: function (e, t, r) {
            "use strict";
            r.r(t);
            r(529), r(539);
            var n,
                a = r(0),
                c = r.n(a),
                s = r(37),
                o = r.n(s),
                i = (r(726), r(87)),
                u = r(507),
                l = r(9),
                d = r(16),
                b = r(13),
                p = r(388),
                m = r(61),
                f = r(508),
                j = r(509),
                h = r(305),
                O = r(510),
                v = r.n(O),
                x = r(511),
                _ = r.n(x),
                g = r(306),
                w = r.n(g),
                k = r(6),
                N = r.n(k),
                y = r(11),
                E = r(12),
                S = r(141),
                C = r.n(S),
                I = r(97),
                P = r.n(I),
                L = "/login3",
                R = "".concat(L),
                T = "".concat(L, "/password"),
                V = "".concat(L, "/change-password"),
                U = "".concat(L, "/check-username"),
                A = "".concat(L, "/redirect-to"),
                M = "".concat(L, "/sign-up"),
                D = "".concat(L, "/email-verification"),
                H = "".concat(L, "/verification-success"),
                B = "".concat(L, "/code-send"),
                F = "".concat(L, "/account-recovery"),
                z = "".concat(L, "/account-recovery/reset"),
                q = "".concat(L, "/account-recovery/reset-success"),
                K = "".concat(L, "/phone-verification"),
                G = "".concat(L, "/consent-management"),
                Y = "".concat(L, "/account-recovery/username-success"),
                W = "".concat(L, "/error"),
                Q = "".concat(L, "/terms-and-conditions"),
                $ = "".concat(L, "/social-login"),
                Z = "".concat(L, "/logout"),
                X = "".concat(L, "/redirect"),
                J = "".concat(L, "/edit-email"),
                ee = {
                    PAGE_NAME:
                        ((n = {}),
                        Object(b.a)(n, R, "username"),
                        Object(b.a)(n, T, "password"),
                        Object(b.a)(n, V, "change-password"),
                        Object(b.a)(n, U, "multi-identities"),
                        Object(b.a)(n, A, "redirect-to"),
                        Object(b.a)(n, M, "sign-up"),
                        Object(b.a)(n, D, "email-verification"),
                        Object(b.a)(n, B, "code-send"),
                        Object(b.a)(n, F, "account-recovery"),
                        Object(b.a)(n, z, "password-recovery"),
                        Object(b.a)(n, q, "password-recovery-success"),
                        Object(b.a)(n, K, "phone-verification"),
                        Object(b.a)(n, Y, "username-recovery-success"),
                        Object(b.a)(n, G, "scope-consent"),
                        Object(b.a)(n, W, "error-page"),
                        Object(b.a)(n, Q, "tnc"),
                        Object(b.a)(n, $, "social-login"),
                        Object(b.a)(n, Z, "logout"),
                        Object(b.a)(n, "UNDEFINED", "undefined-page-name"),
                        n),
                    EVENTS: {
                        HPID_LOGIN_SUCCESS: { event: "e_userLogin" },
                        HPID_SOCIAL_LOGIN_ATTEMPT: {
                            event: "e_formSubmit",
                            formName: "",
                        },
                        HPID_SIGN_UP_SUCCESS: {
                            event: "e_formSubmit",
                            formName: "",
                        },
                        HPID_FORGOT_USERNAME_REQ: {
                            event: "e_formSubmit",
                            formName: "REQUEST_USERNAME_RECOVERY",
                        },
                        HPID_FORGOT_PASSWORD_REQ: {
                            event: "e_formSubmit",
                            formName: "REQUEST_PASSWORD_RECOVERY",
                        },
                        HPID_RESEND_CODE_REQ: {
                            event: "e_formSubmit",
                            formName: "",
                        },
                        HPID_RESET_PASS_SUCCESS: {
                            event: "e_formSubmit",
                            formName: "PASSWORD_RECOVERY_SUCCESS",
                        },
                        HPID_VERIFY_EMAIL_REQ: {
                            event: "e_formSubmit",
                            formName: "",
                        },
                        HPID_VERIFY_EMAIL_SUCCESS: {
                            event: "e_formSubmit",
                            formName: "EMAIL_VERIFICATION_SUCCESS",
                        },
                        HPID_VERIFY_PHONE_REQ: {
                            event: "e_formSubmit",
                            formName: "",
                        },
                        HPID_VERIFY_PHONE_SUCCESS: {
                            event: "e_formSubmit",
                            formName: "PHONE_VERIFICATION_SUCCESS",
                        },
                        HPID_INVALID_CODE: {
                            event: "e_formError",
                            formName: "",
                            formError: "INVALID_EXPIRED_OTP",
                        },
                        HPID_OUTBOUND_LINK_CLICK: {
                            event: "e_linkClick",
                            linkPlacement: "",
                            linkID: "",
                        },
                        HPID_SESSION_MONITORING_TIMEOUT: {
                            event: "e_internal",
                            action: "pageTimeOut",
                            label: "userLogout",
                        },
                    },
                },
                te = "target",
                re = "given_name",
                ne = "family_name",
                ae = "email",
                ce = "phoneNumber",
                se = "login_hint",
                oe = "allow_return",
                ie = "theme_id",
                ue = "country",
                le = "locale",
                de = "hide_create",
                be = "remember_me",
                pe = "flow",
                me = "CSRF-TOKEN",
                fe = "password",
                je = "forgot-password",
                he = "isPristine",
                Oe = "replace",
                ve = "push",
                xe = "hpid_username",
                _e = "APP_RESET",
                ge = "supportHPIDNativeLogin",
                we = "sessionIdentityResource",
                ke = "access_denied",
                Ne = "PHONE_VERIFICATION",
                ye = "EMAIL_VERIFICATION",
                Ee = "success",
                Se = "invalidCredentials",
                Ce = "accountLocked",
                Ie = "email-verification-required",
                Pe = "phone-verification-required",
                Le = "email-or-phone-verification-required",
                Re = "scope-consent-required",
                Te = "mustChangePassword",
                Ve = "invalidCode",
                Ue = "invalidValue",
                Ae = "invalidPassword",
                Me = "invalidNewPassword",
                De = "captchaRequired",
                He = "conflictingResource",
                Be = "noMatch",
                Fe = "serverError",
                ze = "noResults",
                qe = "tnc-validation-required",
                Ke = "no-linked-account",
                Ge = "uniqueness",
                Ye = "notCurrentPassword",
                We = "hpid",
                Qe = "onehp",
                $e = "HPID",
                Ze = "XLarge",
                Xe = "Large",
                Je = "Medium",
                et = { USERNAME: "user-name-form-submit", PASSWORD: "sign-in" },
                tt = { SUBMIT: "sign-up-submit" },
                rt = {
                    SEND_EMAIL: "send-email",
                    SEND_PHONE: "send-phone",
                    VERIFY_BY_EMAIL: "verify-by-email",
                },
                nt = { EDIT_EMAIL_BUTTON: "edit-email" },
                at = {
                    SUBMIT_CODE: "submit-code",
                    RESEND_CODE: "resend-email-code",
                },
                ct = {
                    SUBMIT_CODE: "submit-code",
                    SUBMIT_CODE_BY_EMAIL: "submit-code-by-email",
                    RESEND_CODE: "resend-sms-code",
                },
                st = {
                    SAVE_BUTTON: "password-reset",
                    RESEND_CODE_LINK: "resend",
                },
                ot = { RECOVER_ACCOUNT: "account-recovery" },
                it = "arkose",
                ut = "arkose_signup",
                lt = "0",
                dt = "1",
                bt = "0",
                pt = "1",
                mt = C.a.create();
            (mt.defaults.withCredentials = !0),
                (mt.defaults.xsrfCookieName = me),
                (mt.defaults.xsrfHeaderName = me);
            var ft = function (e) {
                return (
                    e.response || Or.dispatch.error.goError(), Promise.reject(e)
                );
            };
            mt.interceptors.response.use(function (e) {
                return e;
            }, ft),
                mt.interceptors.request.use(function (e) {
                    if (!P.a.get(me)) {
                        var t = Or.getState().session[me];
                        t && (e.headers[me] = t);
                    }
                    return e;
                }, ft);
            var jt = mt,
                ht = _window.__appConfig || {},
                Ot = {
                    backendUrl:
                        ht.backendUrl ||
                        "https://ui-backend.dev.cd.id.hp.com/bff/v1",
                    directoryUrl:
                        ht.directoryUrl || "https://directory.dev.cd.id.hp.com",
                    uaaUrl:
                        ht.uaaUrl || "https://myaccount.dev.cd.id.hp.com/uaa",
                    geoURL:
                        ht.geoURL ||
                        "https://static.dev.cd.id.hp.com/login3/country",
                    gtmId: "GTM-MZXB4R4",
                    emailRegex:
                        /^(?=.{6,254}$)[a-z0-9$&'+=_-]+(?:\.[a-z0-9$&'+=_-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+([a-zA-Z]{2,})$/i,
                    verificationCodeRegex: /^[A-Z0-9]*$/i,
                    defaultLocale: "en_US",
                    paramDefaultValues: {
                        hide_create: !1,
                        allow_return: !1,
                        remember_me: !0,
                    },
                    providerSortOrder: [
                        "onehp",
                        "azure",
                        "google",
                        "facebook",
                        "wechat",
                        "hpid",
                    ],
                    hpidProvider: {
                        name: "hpid",
                        type: "native",
                        identityProvider: "hpid",
                        multicolor: !1,
                        color: "blue",
                        icon: "user",
                    },
                    lastNameBeforeFirst: [
                        "ja_jp",
                        "ko_kr",
                        "zh_cn",
                        "zh_tw",
                        "zh_hk",
                        "zh_sg",
                    ],
                    supportedLocales: [
                        "ar_sa",
                        "ar_ye",
                        "bg_bg",
                        "cs_cz",
                        "da_dk",
                        "de_at",
                        "de_ch",
                        "de_de",
                        "el_gr",
                        "en_ae",
                        "en_au",
                        "en_aw",
                        "en_bb",
                        "en_bd",
                        "en_bg",
                        "en_bs",
                        "en_ca",
                        "en_eg",
                        "en_gb",
                        "en_gd",
                        "en_hk",
                        "en_id",
                        "en_ie",
                        "en_il",
                        "en_in",
                        "en_jm",
                        "en_kw",
                        "en_lb",
                        "en_lk",
                        "en_ma",
                        "en_my",
                        "en_nz",
                        "en_pk",
                        "en_ph",
                        "en_ro",
                        "en_sa",
                        "en_sg",
                        "en_si",
                        "en_th",
                        "en_tt",
                        "en_us",
                        "en_vn",
                        "en_za",
                        "es_ar",
                        "es_bo",
                        "es_co",
                        "es_cl",
                        "es_cr",
                        "es_do",
                        "es_ec",
                        "es_es",
                        "es_gt",
                        "es_hn",
                        "es_lx",
                        "es_mx",
                        "es_ni",
                        "es_sv",
                        "es_pa",
                        "es_pe",
                        "es_pr",
                        "es_py",
                        "es_uy",
                        "es_ve",
                        "et_ee",
                        "fi_fi",
                        "fr_be",
                        "fr_ca",
                        "fr_ch",
                        "fr_fr",
                        "fr_lu",
                        "he_il",
                        "hr_hr",
                        "hu_hu",
                        "id_id",
                        "it_ch",
                        "it_it",
                        "ja_jp",
                        "ko_kr",
                        "lt_lt",
                        "lv_lv",
                        "nl_be",
                        "nl_nl",
                        "nb_no",
                        "pl_pl",
                        "pt_br",
                        "pt_pt",
                        "ro_ro",
                        "ru_ru",
                        "sk_sk",
                        "sl_si",
                        "sr_rs",
                        "sv_se",
                        "th_th",
                        "tr_tr",
                        "zh_cn",
                        "zh_hk",
                        "zh_sg",
                        "zh_tw",
                    ],
                    twoLettersLocaleConfig: {
                        ar: "ar_SA",
                        bg: "bg_BG",
                        cs: "cs_CZ",
                        da: "da_DK",
                        de: "de_DE",
                        el: "el_GR",
                        en: "en_US",
                        es: "es_ES",
                        et: "et_EE",
                        fi: "fi_FI",
                        fr: "fr_FR",
                        he: "he_IL",
                        hr: "hr_HR",
                        hu: "hu_HU",
                        id: "id_ID",
                        it: "it_IT",
                        ja: "ja_JP",
                        ko: "ko_KR",
                        lt: "lt_LT",
                        lv: "lv_LV",
                        nb: "nb_NO",
                        nl: "nl_NL",
                        pl: "pl_PL",
                        pt: "pt_PT",
                        ro: "ro_RO",
                        ru: "ru_RU",
                        sk: "sk_SK",
                        sl: "sl_SI",
                        sr: "sr_RS",
                        sv: "sv_SE",
                        th: "th_TH",
                        tr: "tr_TR",
                        zh: "zh_CN",
                    },
                    arkoseSupportedLanguages: [
                        "ar",
                        "bg",
                        "cs",
                        "da",
                        "de",
                        "el",
                        "en-gb",
                        "en",
                        "es-ar",
                        "es-bo",
                        "es-cl",
                        "es-co",
                        "es-cr",
                        "es-do",
                        "es-ec",
                        "es-gt",
                        "es-hn",
                        "es-mx",
                        "es-ni",
                        "es-pa",
                        "es-pe",
                        "es-pr",
                        "es-py",
                        "es-sv",
                        "es",
                        "et",
                        "fi",
                        "fr-ca",
                        "fr",
                        "he",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "ja",
                        "ko",
                        "lt",
                        "lv",
                        "nl",
                        "no",
                        "pl",
                        "pt-br",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "th",
                        "tr",
                        "zh",
                        "zh-TW",
                        "zh-HK",
                    ],
                    identityProviders: [
                        {
                            name: "Facebook",
                            displayName: "Facebook",
                            type: "facebook",
                            identityProvider: "facebook",
                            multicolor: !0,
                            icon: "facebook",
                        },
                        {
                            name: "GooglePlus",
                            displayName: "Google",
                            type: "oidc",
                            identityProvider: "google",
                            multicolor: !0,
                            icon: "google",
                        },
                        {
                            name: "OneHP",
                            displayName: "OneHP",
                            type: "saml",
                            identityProvider: "onehp",
                            multicolor: !1,
                            color: "blue",
                            icon: "hp",
                        },
                        {
                            name: "MSP",
                            displayName: "HP MSP",
                            type: "saml",
                            identityProvider: "msp",
                            multicolor: !1,
                            color: "blue",
                            icon: "msp",
                        },
                        {
                            name: "WeChat",
                            displayName: "WeChat",
                            type: "wechat",
                            identityProvider: "wechat",
                            multicolor: !0,
                            icon: "wechat",
                        },
                        {
                            name: "Azure",
                            displayName: "Microsoft",
                            type: "azure",
                            description: "Azure Active Directory",
                            identityProvider: "azure",
                            multicolor: !0,
                            icon: "microsoft",
                            text: "link.sign_in_idp",
                        },
                    ],
                    session_timeout: [30, "minutes"],
                },
                vt = C.a.create();
            (vt.defaults.withCredentials = !0),
                (vt.defaults.xsrfCookieName = me),
                (vt.defaults.xsrfHeaderName = me),
                (vt.defaults.baseURL = Ot.backendUrl);
            var xt = function (e) {
                return (
                    (e.response && e.response.data) ||
                        Or.dispatch.error.goError(),
                    Promise.reject(e.response.data)
                );
            };
            vt.interceptors.response.use(function (e) {
                return e;
            }, xt),
                vt.interceptors.request.use(function (e) {
                    if (!P.a.get(me)) {
                        var t = Or.getState().session[me];
                        t && (e.headers[me] = t);
                    }
                    return e;
                }, xt);
            var _t = vt,
                gt = C.a.create();
            gt.defaults.withCredentials = !1;
            var wt = gt,
                kt = (function () {
                    var e = Object(y.a)(
                        N.a.mark(function e(t) {
                            return N.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            (_t.defaults.baseURL = t),
                                                (jt.defaults.baseURL = t);
                                        case 2:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t) {
                        return e.apply(this, arguments);
                    };
                })(),
                Nt = jt,
                yt = {
                    state: {
                        isLoadedArkoseDefault: !1,
                        isLoadedArkoseSignUp: !1,
                    },
                    reducers: {
                        update: function (e, t) {
                            return Object(E.a)(Object(E.a)({}, e), t);
                        },
                    },
                    effects: function (e) {
                        return {
                            _appendScript: function (t, r) {
                                return Object(y.a)(
                                    N.a.mark(function n() {
                                        var a, c, s, o, i, u, l;
                                        return N.a.wrap(function (n) {
                                            for (;;)
                                                switch ((n.prev = n.next)) {
                                                    case 0:
                                                        (a = r.session),
                                                            (c = t.arkoseKey),
                                                            (s = t.parsedKey),
                                                            (o =
                                                                a.captchaEngines),
                                                            (i = o
                                                                ? o.find(
                                                                      function (
                                                                          e
                                                                      ) {
                                                                          return (
                                                                              e.type ===
                                                                              c
                                                                          );
                                                                      }
                                                                  )
                                                                : ""),
                                                            (u = i.data),
                                                            ((l =
                                                                document.createElement(
                                                                    "script"
                                                                )).src = "https://client-api.arkoselabs.com/v2/".concat(
                                                                u,
                                                                "/api.js"
                                                            )),
                                                            l.setAttribute(
                                                                "data-callback",
                                                                "setupEnforcement".concat(
                                                                    s
                                                                )
                                                            ),
                                                            (l.id = s),
                                                            document.head.appendChild(
                                                                l
                                                            ),
                                                            (window[
                                                                "setupEnforcement".concat(
                                                                    s
                                                                )
                                                            ] = function (r) {
                                                                r.setConfig({
                                                                    onReady:
                                                                        function () {
                                                                            (window[
                                                                                "Arkose".concat(
                                                                                    s
                                                                                )
                                                                            ] =
                                                                                r),
                                                                                e.arkose.update(
                                                                                    Object(
                                                                                        b.a
                                                                                    )(
                                                                                        {},
                                                                                        "isLoaded".concat(
                                                                                            s
                                                                                        ),
                                                                                        !0
                                                                                    )
                                                                                ),
                                                                                e.arkose._load(
                                                                                    t
                                                                                );
                                                                        },
                                                                });
                                                            });
                                                    case 10:
                                                    case "end":
                                                        return n.stop();
                                                }
                                        }, n);
                                    })
                                )();
                            },
                            _load: function (t) {
                                return Object(y.a)(
                                    N.a.mark(function r() {
                                        var n, a, c, s, o, i, u;
                                        return N.a.wrap(
                                            function (r) {
                                                for (;;)
                                                    switch ((r.prev = r.next)) {
                                                        case 0:
                                                            return (
                                                                (n =
                                                                    t.submitSelector),
                                                                (a =
                                                                    t.callback),
                                                                (c = t.onHide),
                                                                (s =
                                                                    t.formErrors),
                                                                (o =
                                                                    t.parsedKey),
                                                                (i = t.options),
                                                                (u =
                                                                    "Arkose".concat(
                                                                        o
                                                                    )),
                                                                (r.prev = 2),
                                                                (r.next = 5),
                                                                Nt.get(
                                                                    "/health"
                                                                )
                                                            );
                                                        case 5:
                                                            window[u] &&
                                                                window[
                                                                    u
                                                                ].setConfig({
                                                                    onCompleted:
                                                                        function (
                                                                            e
                                                                        ) {
                                                                            var t =
                                                                                Object(
                                                                                    E.a
                                                                                )(
                                                                                    Object(
                                                                                        E.a
                                                                                    )(
                                                                                        {},
                                                                                        e
                                                                                    ),
                                                                                    {},
                                                                                    {
                                                                                        options:
                                                                                            i,
                                                                                    }
                                                                                );
                                                                            a(
                                                                                t
                                                                            );
                                                                        },
                                                                    onReady:
                                                                        window[
                                                                            u
                                                                        ].run(),
                                                                    selector:
                                                                        s || !n
                                                                            ? ""
                                                                            : "#".concat(
                                                                                  n
                                                                              ),
                                                                    onHide: c,
                                                                }),
                                                                (r.next = 11);
                                                            break;
                                                        case 8:
                                                            (r.prev = 8),
                                                                (r.t0 =
                                                                    r.catch(2)),
                                                                e.error.goError();
                                                        case 11:
                                                        case "end":
                                                            return r.stop();
                                                    }
                                            },
                                            r,
                                            null,
                                            [[2, 8]]
                                        );
                                    })
                                )();
                            },
                            handleArkose: function (t, r) {
                                return Object(y.a)(
                                    N.a.mark(function n() {
                                        var a,
                                            c,
                                            s,
                                            o,
                                            i,
                                            u,
                                            l,
                                            d,
                                            b,
                                            p,
                                            m,
                                            f,
                                            j,
                                            h;
                                        return N.a.wrap(function (n) {
                                            for (;;)
                                                switch ((n.prev = n.next)) {
                                                    case 0:
                                                        (a = r.arkose),
                                                            (c =
                                                                t.submitSelector),
                                                            (s =
                                                                void 0 === c
                                                                    ? ""
                                                                    : c),
                                                            (o = t.callback),
                                                            (i =
                                                                void 0 === o
                                                                    ? function () {
                                                                          return null;
                                                                      }
                                                                    : o),
                                                            (u = t.onHide),
                                                            (l =
                                                                void 0 === u
                                                                    ? function () {
                                                                          return null;
                                                                      }
                                                                    : u),
                                                            (d = t.formErrors),
                                                            (b =
                                                                void 0 === d
                                                                    ? void 0
                                                                    : d),
                                                            (p = t.arkoseKey),
                                                            (m =
                                                                void 0 === p
                                                                    ? it
                                                                    : p),
                                                            (f = t.options),
                                                            (j =
                                                                void 0 === f
                                                                    ? {}
                                                                    : f),
                                                            a[
                                                                "isLoaded".concat(
                                                                    (h =
                                                                        m === ut
                                                                            ? "ArkoseSignUp"
                                                                            : "ArkoseDefault")
                                                                )
                                                            ]
                                                                ? e.arkose._load(
                                                                      {
                                                                          submitSelector:
                                                                              s,
                                                                          callback:
                                                                              i,
                                                                          onHide: l,
                                                                          formErrors:
                                                                              b,
                                                                          arkoseKey:
                                                                              m,
                                                                          parsedKey:
                                                                              h,
                                                                          options:
                                                                              j,
                                                                      }
                                                                  )
                                                                : e.arkose._appendScript(
                                                                      {
                                                                          submitSelector:
                                                                              s,
                                                                          callback:
                                                                              i,
                                                                          onHide: l,
                                                                          formErrors:
                                                                              b,
                                                                          arkoseKey:
                                                                              m,
                                                                          parsedKey:
                                                                              h,
                                                                          options:
                                                                              j,
                                                                      }
                                                                  );
                                                    case 4:
                                                    case "end":
                                                        return n.stop();
                                                }
                                        }, n);
                                    })
                                )();
                            },
                        };
                    },
                },
                Et = r(50),
                St = r(512),
                Ct = r(513),
                It = r(514),
                Pt = r.n(It),
                Lt = new ((function () {
                    function e() {
                        Object(St.a)(this, e),
                            (this.dataLayerVariables = {
                                userTypeSession: "guest",
                            }),
                            Pt.a.initialize({ gtmId: Ot.gtmId });
                    }
                    return (
                        Object(Ct.a)(e, [
                            {
                                key: "_getPageName",
                                value: function () {
                                    var e = mr.location;
                                    return ee.PAGE_NAME[e.pathname]
                                        ? ee.PAGE_NAME[e.pathname]
                                        : ee.PAGE_NAME.UNDEFINED;
                                },
                            },
                            {
                                key: "setVariable",
                                value: function (e) {
                                    Object.assign(this.dataLayerVariables, e);
                                },
                            },
                            {
                                key: "trackPageView",
                                value: function (e) {
                                    (e = e || this._getPageName()),
                                        _window.dataLayer.push(
                                            Object(E.a)(
                                                {
                                                    event: "e_pageView",
                                                    pageNameL5: e,
                                                },
                                                this.dataLayerVariables
                                            )
                                        );
                                },
                            },
                            {
                                key: "trackEvent",
                                value: function () {
                                    var e =
                                            arguments.length > 0 &&
                                            void 0 !== arguments[0]
                                                ? arguments[0]
                                                : {},
                                        t =
                                            arguments.length > 1 &&
                                            void 0 !== arguments[1]
                                                ? arguments[1]
                                                : {};
                                    (e = Object.assign(
                                        {},
                                        e,
                                        t,
                                        this.dataLayerVariables
                                    )),
                                        _window.dataLayer.push(e);
                                },
                            },
                        ]),
                        e
                    );
                })())();
            Object.freeze(Lt);
            var Rt,
                Tt = Lt,
                Vt = {
                    state: {
                        error: "",
                        isLoadingSendSMS: !1,
                        isLoadingSendEmail: !1,
                    },
                    reducers: {
                        update: function (e, t) {
                            return Object(E.a)(Object(E.a)({}, e), t);
                        },
                    },
                    effects: function (e) {
                        return {
                            sendCode: function (t) {
                                return Object(y.a)(
                                    N.a.mark(function r() {
                                        var n, a, c, s;
                                        return N.a.wrap(function (r) {
                                            for (;;)
                                                switch ((r.prev = r.next)) {
                                                    case 0:
                                                        return (
                                                            (n =
                                                                t.submitSelector),
                                                            "email" ===
                                                            (a = t.type)
                                                                ? e.codeVerification.update(
                                                                      {
                                                                          error: "",
                                                                          isLoadingSendEmail:
                                                                              !0,
                                                                      }
                                                                  )
                                                                : e.codeVerification.update(
                                                                      {
                                                                          error: "",
                                                                          isLoadingSendSMS:
                                                                              !0,
                                                                      }
                                                                  ),
                                                            (s = {
                                                                submitSelector:
                                                                    n,
                                                                callback: (c =
                                                                    (function () {
                                                                        var t =
                                                                            Object(
                                                                                y.a
                                                                            )(
                                                                                N.a.mark(
                                                                                    function t(
                                                                                        r
                                                                                    ) {
                                                                                        var n,
                                                                                            a,
                                                                                            c,
                                                                                            s,
                                                                                            o;
                                                                                        return N.a.wrap(
                                                                                            function (
                                                                                                t
                                                                                            ) {
                                                                                                for (;;)
                                                                                                    switch (
                                                                                                        (t.prev =
                                                                                                            t.next)
                                                                                                    ) {
                                                                                                        case 0:
                                                                                                            return (
                                                                                                                (n =
                                                                                                                    r.token),
                                                                                                                (a =
                                                                                                                    r.options),
                                                                                                                (c =
                                                                                                                    a &&
                                                                                                                    a.type),
                                                                                                                (s =
                                                                                                                    {
                                                                                                                        captcha:
                                                                                                                            n && {
                                                                                                                                data: n,
                                                                                                                                type: it,
                                                                                                                            },
                                                                                                                        type: c,
                                                                                                                    }),
                                                                                                                (t.prev = 4),
                                                                                                                (t.next = 7),
                                                                                                                e.codeVerification.requestCode(
                                                                                                                    s
                                                                                                                )
                                                                                                            );
                                                                                                        case 7:
                                                                                                            "email" ===
                                                                                                            c
                                                                                                                ? (Tt.trackEvent(
                                                                                                                      ee
                                                                                                                          .EVENTS
                                                                                                                          .HPID_VERIFY_EMAIL_REQ,
                                                                                                                      {
                                                                                                                          formName:
                                                                                                                              "VERIFY_EMAIL_SIGN_IN",
                                                                                                                      }
                                                                                                                  ),
                                                                                                                  e.codeVerification.update(
                                                                                                                      {
                                                                                                                          isLoadingSendEmail:
                                                                                                                              !1,
                                                                                                                      }
                                                                                                                  ),
                                                                                                                  e(
                                                                                                                      Object(
                                                                                                                          Et.e
                                                                                                                      )(
                                                                                                                          D,
                                                                                                                          {
                                                                                                                              context:
                                                                                                                                  ye,
                                                                                                                          }
                                                                                                                      )
                                                                                                                  ))
                                                                                                                : (Tt.trackEvent(
                                                                                                                      ee
                                                                                                                          .EVENTS
                                                                                                                          .HPID_VERIFY_PHONE_REQ,
                                                                                                                      {
                                                                                                                          formName:
                                                                                                                              "VERIFY_PHONE_SIGN_IN",
                                                                                                                      }
                                                                                                                  ),
                                                                                                                  e.codeVerification.update(
                                                                                                                      {
                                                                                                                          isLoadingSendSMS:
                                                                                                                              !1,
                                                                                                                      }
                                                                                                                  ),
                                                                                                                  e(
                                                                                                                      Object(
                                                                                                                          Et.e
                                                                                                                      )(
                                                                                                                          K,
                                                                                                                          {
                                                                                                                              context:
                                                                                                                                  Ne,
                                                                                                                          }
                                                                                                                      )
                                                                                                                  )),
                                                                                                                (t.next = 19);
                                                                                                            break;
                                                                                                        case 10:
                                                                                                            if (
                                                                                                                ((t.prev = 10),
                                                                                                                (t.t0 =
                                                                                                                    t.catch(
                                                                                                                        4
                                                                                                                    )),
                                                                                                                t
                                                                                                                    .t0
                                                                                                                    .error !==
                                                                                                                    De)
                                                                                                            ) {
                                                                                                                t.next = 18;
                                                                                                                break;
                                                                                                            }
                                                                                                            return (
                                                                                                                (o =
                                                                                                                    a &&
                                                                                                                    a.arkoseParams),
                                                                                                                (t.next = 16),
                                                                                                                e.arkose.handleArkose(
                                                                                                                    o
                                                                                                                )
                                                                                                            );
                                                                                                        case 16:
                                                                                                            t.next = 19;
                                                                                                            break;
                                                                                                        case 18:
                                                                                                            e.codeVerification.update(
                                                                                                                {
                                                                                                                    error: "form.err_send_email_code",
                                                                                                                    isLoadingSendSMS:
                                                                                                                        !1,
                                                                                                                    isLoadingSendEmail:
                                                                                                                        !1,
                                                                                                                }
                                                                                                            );
                                                                                                        case 19:
                                                                                                        case "end":
                                                                                                            return t.stop();
                                                                                                    }
                                                                                            },
                                                                                            t,
                                                                                            null,
                                                                                            [
                                                                                                [
                                                                                                    4,
                                                                                                    10,
                                                                                                ],
                                                                                            ]
                                                                                        );
                                                                                    }
                                                                                )
                                                                            );
                                                                        return function (
                                                                            e
                                                                        ) {
                                                                            return t.apply(
                                                                                this,
                                                                                arguments
                                                                            );
                                                                        };
                                                                    })()),
                                                                options: {
                                                                    type: a,
                                                                },
                                                            }),
                                                            (r.next = 7),
                                                            c({
                                                                options: {
                                                                    type: a,
                                                                    arkoseParams:
                                                                        s,
                                                                },
                                                            })
                                                        );
                                                    case 7:
                                                    case "end":
                                                        return r.stop();
                                                }
                                        }, r);
                                    })
                                )();
                            },
                            requestCode: function (e) {
                                return Object(y.a)(
                                    N.a.mark(function t() {
                                        var r, n, a, c;
                                        return N.a.wrap(function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (r = e.type),
                                                            (n = e.captcha),
                                                            (a = {}),
                                                            n &&
                                                                (a.captcha = n),
                                                            (t.next = 5),
                                                            _t.post(
                                                                "/session/".concat(
                                                                    r,
                                                                    "/send-code"
                                                                ),
                                                                a
                                                            )
                                                        );
                                                    case 5:
                                                        return (
                                                            (c = t.sent),
                                                            t.abrupt(
                                                                "return",
                                                                c.data
                                                            )
                                                        );
                                                    case 7:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }, t);
                                    })
                                )();
                            },
                            resendEmailCode: function (t) {
                                return Object(y.a)(
                                    N.a.mark(function r() {
                                        var n, a, c, s, o, i, u, l;
                                        return N.a.wrap(
                                            function (r) {
                                                for (;;)
                                                    switch ((r.prev = r.next)) {
                                                        case 0:
                                                            return (
                                                                (n = t.options),
                                                                (a = t.token),
                                                                (c =
                                                                    n.setResendEmail),
                                                                (s =
                                                                    n.setShowResend),
                                                                (o =
                                                                    n.setError),
                                                                (i =
                                                                    n.arkoseParams),
                                                                (u = {
                                                                    type: "email",
                                                                }),
                                                                a &&
                                                                    (u.captcha =
                                                                        {
                                                                            data: a,
                                                                            type: it,
                                                                        }),
                                                                (r.prev = 4),
                                                                Tt.trackEvent(
                                                                    ee.EVENTS
                                                                        .HPID_RESEND_CODE_REQ,
                                                                    {
                                                                        formName:
                                                                            "REQUEST_NEW_OTP_EMAIL_VERIFICATION",
                                                                    }
                                                                ),
                                                                (r.next = 8),
                                                                e.codeVerification.requestCode(
                                                                    u
                                                                )
                                                            );
                                                        case 8:
                                                            (l = r.sent),
                                                                c(l.email),
                                                                s(!0),
                                                                (r.next = 16);
                                                            break;
                                                        case 13:
                                                            (r.prev = 13),
                                                                (r.t0 =
                                                                    r.catch(4)),
                                                                r.t0.error ===
                                                                De
                                                                    ? e.arkose.handleArkose(
                                                                          i
                                                                      )
                                                                    : o(
                                                                          "code",
                                                                          "invalidCode",
                                                                          "form.err_send_email_code"
                                                                      );
                                                        case 16:
                                                        case "end":
                                                            return r.stop();
                                                    }
                                            },
                                            r,
                                            null,
                                            [[4, 13]]
                                        );
                                    })
                                )();
                            },
                            resendSMSCode: function (t) {
                                return Object(y.a)(
                                    N.a.mark(function r() {
                                        var n, a, c, s, o, i, u, l;
                                        return N.a.wrap(
                                            function (r) {
                                                for (;;)
                                                    switch ((r.prev = r.next)) {
                                                        case 0:
                                                            return (
                                                                (n = t.options),
                                                                (a = t.token),
                                                                (c =
                                                                    n.setResendCode),
                                                                (s =
                                                                    n.setShowResend),
                                                                (o =
                                                                    n.setError),
                                                                (i =
                                                                    n.arkoseParams),
                                                                (u = {
                                                                    type: "phone",
                                                                }),
                                                                a &&
                                                                    (u.captcha =
                                                                        {
                                                                            data: a,
                                                                            type: it,
                                                                        }),
                                                                (r.prev = 4),
                                                                Tt.trackEvent(
                                                                    ee.EVENTS
                                                                        .HPID_VERIFY_PHONE_REQ,
                                                                    {
                                                                        formName:
                                                                            "PHONE_VERIFICATION",
                                                                    }
                                                                ),
                                                                (r.next = 8),
                                                                e.codeVerification.requestCode(
                                                                    u
                                                                )
                                                            );
                                                        case 8:
                                                            (l = r.sent),
                                                                c(
                                                                    l.phoneNumber
                                                                ),
                                                                s(!0),
                                                                (r.next = 16);
                                                            break;
                                                        case 13:
                                                            (r.prev = 13),
                                                                (r.t0 =
                                                                    r.catch(4)),
                                                                r.t0.error ===
                                                                De
                                                                    ? e.arkose.handleArkose(
                                                                          i
                                                                      )
                                                                    : o(
                                                                          "code",
                                                                          "invalidCode",
                                                                          "form.err_send_email_code"
                                                                      );
                                                        case 16:
                                                        case "end":
                                                            return r.stop();
                                                    }
                                            },
                                            r,
                                            null,
                                            [[4, 13]]
                                        );
                                    })
                                )();
                            },
                        };
                    },
                },
                Ut = r(515),
                At = r.n(Ut),
                Mt = r(516),
                Dt = r.n(Mt),
                Ht = r(1529),
                Bt = function (e) {
                    return Ot.emailRegex.test(e);
                },
                Ft = function (e) {
                    var t = Object(Ht.a)(e || "");
                    return !!t && t.isValid();
                },
                zt = function (e) {
                    var t = Object(Ht.a)(e || "");
                    if ((e && !t) || (t && !t.isValid()))
                        return "form.err_sms_number_invalid";
                },
                qt = function (e) {
                    var t = (function (e) {
                            return {
                                hasMinLength: e.length >= 8,
                                hasLowerCase: new RegExp(
                                    "^(?=.*[a-z]).*",
                                    "g"
                                ).test(e),
                                hasUpperCase: new RegExp(
                                    "^(?=.*[A-Z]).*",
                                    "g"
                                ).test(e),
                                hasNumber: new RegExp(
                                    "(?=.*[0-9]).*",
                                    "g"
                                ).test(e),
                                hasSpecialCharacter: new RegExp(
                                    "(?=.*[\\W_])",
                                    "g"
                                ).test(e),
                            };
                        })(e),
                        r = t.hasMinLength,
                        n = t.hasLowerCase,
                        a = t.hasUpperCase,
                        c = t.hasNumber,
                        s = t.hasSpecialCharacter,
                        o = [n, a, c, s].filter(Boolean).length >= 3;
                    return {
                        hasMinLength: r,
                        hasLowerCase: n,
                        hasUpperCase: a,
                        hasNumber: c,
                        hasSpecialCharacter: s,
                        policyCriteria: o,
                        isValidPassword: r && o,
                    };
                },
                Kt = function () {
                    var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : { target: "" },
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return !!(t && t.isPristine && t[oe] && t[te] === e.target);
                },
                Gt = function (e) {
                    for (var t = 0; t < e.length; t++)
                        if (!e[t].requirementSatisfied) return e[t].type;
                },
                Yt = function (e) {
                    var t =
                        /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
                    try {
                        var r = At()(e),
                            n = Dt.a.inflate(r, { to: "string" });
                        return (
                            t.test(n) && (n = n.replace(t, "")),
                            (function (e) {
                                return /\s?<!doctype html>|(<html\b[^>]*>|<body\b[^>]*>|<x-[^>]+>)+/i.test(
                                    e
                                );
                            })(n) ||
                                (n = n
                                    .replace(/\n/g, "<br/>")
                                    .replace(/\r/g, "")),
                            n
                        );
                    } catch (a) {
                        return (
                            console.error("inflate content occurs error", a), e
                        );
                    }
                },
                Wt = function (e) {
                    return e.map(function (e) {
                        return {
                            title: e.displayTitle || e.tncId,
                            content: Yt(e.content),
                        };
                    });
                },
                Qt = function (e) {
                    return P.a.set(me, e, { sameSite: "lax", path: "/" });
                },
                $t = function (e) {
                    /\w{2}_\w{2}/.test(e) && _window.localStorage.setItem(le, e);
                },
                Zt = function (e) {
                    var t = e.replace("-", "_").split("_");
                    return (
                        1 === t.length
                            ? (e =
                                  Ot.twoLettersLocaleConfig[t[0]] ||
                                  Ot.defaultLocale)
                            : 2 === t.length &&
                              ((t[0] = t[0].toLowerCase()),
                              (t[1] = t[1].toUpperCase()),
                              (e = t.join("_"))),
                        e
                    );
                },
                Xt = function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : "";
                    e && P.a.set(xe, e, { sameSite: "Strict", expires: 365 });
                },
                Jt = function () {
                    return P.a.get(xe) || "";
                },
                er = function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : "";
                    return Ot.lastNameBeforeFirst.includes(e.toLowerCase());
                },
                tr = (function () {
                    var e = Object(y.a)(
                        N.a.mark(function e(t) {
                            var r, n;
                            return N.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (r = t.username),
                                                (n = t.captcha),
                                                (e.next = 3),
                                                _t.post(
                                                    "/session/check-username",
                                                    { username: r, captcha: n }
                                                )
                                            );
                                        case 3:
                                            return e.abrupt("return", e.sent);
                                        case 4:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t) {
                        return e.apply(this, arguments);
                    };
                })(),
                rr = (function () {
                    var e = Object(y.a)(
                        N.a.mark(function e(t) {
                            var r, n, a;
                            return N.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (r = t.username),
                                                (n = t.password),
                                                (a = t.captcha),
                                                e.abrupt(
                                                    "return",
                                                    _t.post(
                                                        "/session/username-password",
                                                        {
                                                            username: "".concat(
                                                                r,
                                                                "@hpid"
                                                            ),
                                                            password: n,
                                                            captcha: a,
                                                        }
                                                    )
                                                )
                                            );
                                        case 2:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t) {
                        return e.apply(this, arguments);
                    };
                })(),
                nr = (function () {
                    var e = Object(y.a)(
                        N.a.mark(function e(t) {
                            var r;
                            return N.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (r = t.flowUrl),
                                                (e.next = 3),
                                                _t.post("/auth/session", {
                                                    flow: r,
                                                })
                                            );
                                        case 3:
                                            return e.abrupt("return", e.sent);
                                        case 4:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t) {
                        return e.apply(this, arguments);
                    };
                })(),
                ar = (function () {
                    var e = Object(y.a)(
                        N.a.mark(function e() {
                            return N.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (e.next = 2),
                                                _t.get("/session/info")
                                            );
                                        case 2:
                                            return e.abrupt("return", e.sent);
                                        case 3:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function () {
                        return e.apply(this, arguments);
                    };
                })(),
                cr = {
                    postCheckUsername: function (e) {
                        return tr(e);
                    },
                    postUsernamePassword: function (e) {
                        return rr(e);
                    },
                    postAuthSession: function (e) {
                        return nr(e);
                    },
                    getSessionInfo: function () {
                        return ar();
                    },
                },
                sr = {
                    state:
                        ((Rt = {
                            client: { brandingImages: [], displayName: "" },
                            supportedIDP: [],
                            captchaEngines: [],
                            tncs: [],
                            scopes: [],
                            sessionIdentityResource: {},
                            approved: !1,
                        }),
                        Object(b.a)(Rt, ie, ""),
                        Object(b.a)(Rt, "startTime", ""),
                        Object(b.a)(Rt, "warned", !1),
                        Object(b.a)(Rt, "smsSupportedCountryNumbers", []),
                        Object(b.a)(Rt, me, ""),
                        Object(b.a)(Rt, "regionEndpointUrl", Ot.backendUrl),
                        Rt),
                    reducers: {
                        update: function (e, t) {
                            return Object(E.a)(Object(E.a)({}, e), t);
                        },
                    },
                    effects: function (e) {
                        return {
                            updateSession: function (t) {
                                var r = t.client,
                                    n = t.status,
                                    a = t.sessionIdentityResource,
                                    c = t.captchaEngines,
                                    s = t.regionEndpointUrl,
                                    o = t.csrfToken;
                                switch (
                                    (o &&
                                        (e.session.update(
                                            Object(b.a)({}, me, o)
                                        ),
                                        Qt(o)),
                                    e.session.update({
                                        client: r,
                                        captchaEngines: c,
                                    }),
                                    s &&
                                        e.session.update({
                                            regionEndpointUrl: s,
                                        }),
                                    a && e.session.updateUserSession(a),
                                    n)
                                ) {
                                    case qe:
                                        return e(Object(Et.f)(Q));
                                    case Pe:
                                        return (
                                            e.user.update({
                                                phoneNumber: t.phoneNumber,
                                            }),
                                            e(Object(Et.f)(B, { context: Ne }))
                                        );
                                    case Ie:
                                        return (
                                            e.user.update({ email: t.email }),
                                            e(Object(Et.f)(B, { context: ye }))
                                        );
                                    case Le:
                                        return (
                                            e.user.update({
                                                phoneNumber: t.phoneNumber,
                                                email: t.email,
                                            }),
                                            e(Object(Et.f)(B, { context: Ne }))
                                        );
                                    case Re:
                                        return e(Object(Et.f)(G));
                                    default:
                                        return e.session.handleSupportedIDPs(t);
                                }
                            },
                            handleSupportedIDPs: function (t) {
                                return Object(y.a)(
                                    N.a.mark(function r() {
                                        var n, a, c;
                                        return N.a.wrap(function (r) {
                                            for (;;)
                                                switch ((r.prev = r.next)) {
                                                    case 0:
                                                        (n = t.idp),
                                                            (a =
                                                                void 0 === n
                                                                    ? []
                                                                    : n),
                                                            (c =
                                                                Ot.identityProviders.filter(
                                                                    function (
                                                                        e
                                                                    ) {
                                                                        return a.find(
                                                                            function (
                                                                                t
                                                                            ) {
                                                                                var r,
                                                                                    n;
                                                                                return (
                                                                                    (null ===
                                                                                        t ||
                                                                                    void 0 ===
                                                                                        t ||
                                                                                    null ===
                                                                                        (r =
                                                                                            t.name) ||
                                                                                    void 0 ===
                                                                                        r
                                                                                        ? void 0
                                                                                        : r.toLowerCase()) ===
                                                                                    (null ===
                                                                                        e ||
                                                                                    void 0 ===
                                                                                        e ||
                                                                                    null ===
                                                                                        (n =
                                                                                            e.name) ||
                                                                                    void 0 ===
                                                                                        n
                                                                                        ? void 0
                                                                                        : n.toLowerCase())
                                                                                );
                                                                            }
                                                                        );
                                                                    }
                                                                )),
                                                            e.session.update({
                                                                supportedIDP: c,
                                                            });
                                                    case 3:
                                                    case "end":
                                                        return r.stop();
                                                }
                                        }, r);
                                    })
                                )();
                            },
                            updateUserSession: function (t) {
                                var r;
                                e.user.update(
                                    ((r = {}),
                                    Object(b.a)(
                                        r,
                                        ne,
                                        t.name && t.name.familyName
                                    ),
                                    Object(b.a)(
                                        r,
                                        re,
                                        t.name && t.name.givenName
                                    ),
                                    Object(b.a)(r, "locale", t.locale),
                                    Object(b.a)(
                                        r,
                                        "country",
                                        t.countryResidence
                                    ),
                                    Object(b.a)(r, "username", t.userName),
                                    Object(b.a)(
                                        r,
                                        "identityProvider",
                                        t.identityProvider
                                    ),
                                    r)
                                ),
                                    $t(t.locale),
                                    e.user.changeLanguage();
                            },
                            initSessionWithFlow: function (t) {
                                return Object(y.a)(
                                    N.a.mark(function r() {
                                        var n, a;
                                        return N.a.wrap(function (r) {
                                            for (;;)
                                                switch ((r.prev = r.next)) {
                                                    case 0:
                                                        return (
                                                            (r.next = 2),
                                                            cr.postAuthSession({
                                                                flowUrl: t,
                                                            })
                                                        );
                                                    case 2:
                                                        return (
                                                            (n = r.sent),
                                                            (a = n.data),
                                                            e.session.updateSession(
                                                                a
                                                            ),
                                                            (r.next = 7),
                                                            kt(
                                                                a.regionEndpointUrl
                                                            )
                                                        );
                                                    case 7:
                                                        return r.abrupt(
                                                            "return",
                                                            a
                                                        );
                                                    case 8:
                                                    case "end":
                                                        return r.stop();
                                                }
                                        }, r);
                                    })
                                )();
                            },
                            acceptOrDeclineTermsAndConditions: function (e) {
                                return Object(y.a)(
                                    N.a.mark(function t() {
                                        return N.a.wrap(function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return t.abrupt(
                                                            "return",
                                                            Nt.post(
                                                                "/session/tncs",
                                                                {
                                                                    termsAndConditions:
                                                                        e,
                                                                }
                                                            )
                                                        );
                                                    case 1:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }, t);
                                    })
                                )();
                            },
                            approveConsent: function (e) {
                                return Object(y.a)(
                                    N.a.mark(function t() {
                                        var r, n, a;
                                        return N.a.wrap(
                                            function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            return (
                                                                (r =
                                                                    e.approved),
                                                                (n =
                                                                    e.optionalScopes),
                                                                (t.prev = 1),
                                                                (t.next = 4),
                                                                Nt.post(
                                                                    "/session/scope-consents",
                                                                    {
                                                                        approved:
                                                                            r,
                                                                        optionalScopes:
                                                                            n,
                                                                    }
                                                                )
                                                            );
                                                        case 4:
                                                            return (
                                                                (a = t.sent),
                                                                t.abrupt(
                                                                    "return",
                                                                    a.data
                                                                )
                                                            );
                                                        case 8:
                                                            throw (
                                                                ((t.prev = 8),
                                                                (t.t0 =
                                                                    t.catch(1)),
                                                                t.t0.response
                                                                    .data)
                                                            );
                                                        case 12:
                                                        case "end":
                                                            return t.stop();
                                                    }
                                            },
                                            t,
                                            null,
                                            [[1, 8]]
                                        );
                                    })
                                )();
                            },
                            fetchSessionInfo: function (t, r) {
                                return Object(y.a)(
                                    N.a.mark(function t() {
                                        var n, a;
                                        return N.a.wrap(function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (t.next = 2),
                                                            kt(
                                                                r.session
                                                                    .regionEndpointUrl
                                                            )
                                                        );
                                                    case 2:
                                                        return (
                                                            (t.next = 4),
                                                            cr.getSessionInfo()
                                                        );
                                                    case 4:
                                                        return (
                                                            (n = t.sent),
                                                            (a = n.data),
                                                            e.session.updateSession(
                                                                a
                                                            ),
                                                            t.abrupt(
                                                                "return",
                                                                a
                                                            )
                                                        );
                                                    case 8:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }, t);
                                    })
                                )();
                            },
                            fetchTermsAndConditions: function (e) {
                                var t = this;
                                return Object(y.a)(
                                    N.a.mark(function r() {
                                        var n, a, c, s, o, i;
                                        return N.a.wrap(function (r) {
                                            for (;;)
                                                switch ((r.prev = r.next)) {
                                                    case 0:
                                                        return (
                                                            (n = e.locale),
                                                            (a = e.country),
                                                            (c = {
                                                                locale: n,
                                                                country: a,
                                                            }),
                                                            (r.next = 4),
                                                            Nt.get(
                                                                "/session/tncs",
                                                                { params: c }
                                                            )
                                                        );
                                                    case 4:
                                                        (s = r.sent),
                                                            (o = s.data),
                                                            (i = Wt(o.tncs)),
                                                            t.update({
                                                                tncs: i,
                                                            });
                                                    case 8:
                                                    case "end":
                                                        return r.stop();
                                                }
                                        }, r);
                                    })
                                )();
                            },
                            fetchSingUPTermsAndConditions: function (e) {
                                var t = this;
                                return Object(y.a)(
                                    N.a.mark(function r() {
                                        var n, a, c, s, o, i;
                                        return N.a.wrap(function (r) {
                                            for (;;)
                                                switch ((r.prev = r.next)) {
                                                    case 0:
                                                        return (
                                                            (n = e.locale),
                                                            (a = e.country),
                                                            (c = {
                                                                locale: n,
                                                                country: a,
                                                            }),
                                                            (r.next = 4),
                                                            Nt.get(
                                                                "/session/sign-up/tncs",
                                                                { params: c }
                                                            )
                                                        );
                                                    case 4:
                                                        (s = r.sent),
                                                            (o = s.data),
                                                            (i = Wt(o.tncs)),
                                                            t.update({
                                                                tncs: i,
                                                            });
                                                    case 8:
                                                    case "end":
                                                        return r.stop();
                                                }
                                        }, r);
                                    })
                                )();
                            },
                            fetchSmsSupportedCountryNumbers: function () {
                                return Object(y.a)(
                                    N.a.mark(function t() {
                                        var r, n;
                                        return N.a.wrap(
                                            function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            return (
                                                                (t.prev = 0),
                                                                (t.next = 3),
                                                                Nt.get(
                                                                    "/session/sms/supported-countries"
                                                                )
                                                            );
                                                        case 3:
                                                            (r = t.sent),
                                                                (n = r.data),
                                                                e.session.update(
                                                                    {
                                                                        smsSupportedCountryNumbers:
                                                                            n,
                                                                    }
                                                                ),
                                                                (t.next = 19);
                                                            break;
                                                        case 8:
                                                            if (
                                                                ((t.prev = 8),
                                                                (t.t0 =
                                                                    t.catch(0)),
                                                                !t.t0.response)
                                                            ) {
                                                                t.next = 14;
                                                                break;
                                                            }
                                                            throw t.t0.response;
                                                        case 14:
                                                            if (!t.t0.request) {
                                                                t.next = 18;
                                                                break;
                                                            }
                                                            throw t.t0.request;
                                                        case 18:
                                                            throw t.t0;
                                                        case 19:
                                                        case "end":
                                                            return t.stop();
                                                    }
                                            },
                                            t,
                                            null,
                                            [[0, 8]]
                                        );
                                    })
                                )();
                            },
                            getConsent: function () {
                                var e = this;
                                return Object(y.a)(
                                    N.a.mark(function t() {
                                        var r, n, a, c, s;
                                        return N.a.wrap(
                                            function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            return (
                                                                (t.prev = 0),
                                                                (t.next = 3),
                                                                Nt.get(
                                                                    "/session/scope-consents"
                                                                )
                                                            );
                                                        case 3:
                                                            return (
                                                                (r = t.sent),
                                                                (n = r.data),
                                                                (a =
                                                                    n.sessionIdentityResource),
                                                                (c = n.scopes),
                                                                (s =
                                                                    n.approved),
                                                                e.updateUserSession(
                                                                    a
                                                                ),
                                                                e.update({
                                                                    scopes: c,
                                                                    sessionIdentityResource:
                                                                        a,
                                                                    approved: s,
                                                                }),
                                                                t.abrupt(
                                                                    "return",
                                                                    r.data
                                                                )
                                                            );
                                                        case 10:
                                                            throw (
                                                                ((t.prev = 10),
                                                                (t.t0 =
                                                                    t.catch(0)),
                                                                t.t0.response
                                                                    .data)
                                                            );
                                                        case 14:
                                                        case "end":
                                                            return t.stop();
                                                    }
                                            },
                                            t,
                                            null,
                                            [[0, 10]]
                                        );
                                    })
                                )();
                            },
                        };
                    },
                },
                or = r(310),
                ir = r(518),
                ur = r(98);
            or.a
                .use(ur.e)
                .use(ir.a)
                .init({
                    ns: ["common", "countries"],
                    defaultNS: "common",
                    load: "currentOnly",
                    fallbackLng: Ot.defaultLocale,
                    debug: !1,
                    backend: {
                        loadPath: "/login3/locales/{{lng}}/{{ns}}.json",
                        queryStringParams: { v: "3.0.0" },
                    },
                    interpolation: { escapeValue: !1 },
                });
            var lr,
                dr = or.a,
                br = {
                    state:
                        ((lr = {
                            username: Jt(),
                            loginHint: "",
                            password: "",
                            locale: "",
                            country: "US",
                            identityProvider: "",
                            market: null,
                            identities: [],
                            passwordRequirements: [],
                            discoveryIDP: "",
                            rememberMe: "" !== Jt(),
                            showRememberMe: !0,
                            phoneNumber: "",
                            email: "",
                        }),
                        Object(b.a)(lr, he, !0),
                        Object(b.a)(lr, "isEditEmailLoading", !1),
                        lr),
                    reducers: {
                        update: function (e, t) {
                            return Object(E.a)(Object(E.a)({}, e), t);
                        },
                    },
                    effects: function (e) {
                        return {
                            updateParams: function () {
                                var e =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : {},
                                    t =
                                        arguments.length > 1
                                            ? arguments[1]
                                            : void 0,
                                    r = t.user;
                                Object.keys(e).length &&
                                    (void 0 !== e[me] && Qt(e[me]),
                                    void 0 !== e[se] &&
                                        (r.username || (e.username = e[se]),
                                        (e.loginHint = e[se]),
                                        delete e[se]),
                                    void 0 !== e[be] &&
                                        ((e.showRememberMe = e[be]),
                                        !1 === e[be] &&
                                            void 0 === e.loginHint &&
                                            (e.username = ""),
                                        delete e[be]),
                                    this.update(e));
                            },
                            changeLanguage: function () {
                                return Object(y.a)(
                                    N.a.mark(function t() {
                                        var r;
                                        return N.a.wrap(function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (t.next = 2),
                                                            e.user._getLocale()
                                                        );
                                                    case 2:
                                                        (r = t.sent),
                                                            dr.changeLanguage(
                                                                r
                                                            ),
                                                            e.user.update({
                                                                locale: r,
                                                            });
                                                    case 5:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }, t);
                                    })
                                )();
                            },
                            _getLocale: function () {
                                return Object(y.a)(
                                    N.a.mark(function e() {
                                        var t, r;
                                        return N.a.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if (
                                                            ((t =
                                                                new URLSearchParams(
                                                                    _window.location.search
                                                                )),
                                                            (r =
                                                                _window.localStorage.getItem(
                                                                    le
                                                                ) ||
                                                                (null === t ||
                                                                void 0 === t
                                                                    ? void 0
                                                                    : t.get(
                                                                          le
                                                                      )) ||
                                                                (null === Or ||
                                                                void 0 === Or
                                                                    ? void 0
                                                                    : Or.getState()
                                                                          .user
                                                                          .locale) ||
                                                                navigator.language ||
                                                                navigator.browserLanguage ||
                                                                navigator.userLanguage))
                                                        ) {
                                                            e.next = 4;
                                                            break;
                                                        }
                                                        return e.abrupt(
                                                            "return",
                                                            Ot.defaultLocale
                                                        );
                                                    case 4:
                                                        return (
                                                            (r = Zt(r)),
                                                            Ot.supportedLocales.includes(
                                                                r.toLowerCase()
                                                            ) ||
                                                                (r =
                                                                    Ot.defaultLocale),
                                                            e.abrupt(
                                                                "return",
                                                                r
                                                            )
                                                        );
                                                    case 7:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                )();
                            },
                            processIdps: function (t, r) {
                                var n = r.session.supportedIDP,
                                    a = t.data,
                                    c = a.identities,
                                    s = void 0 === c ? [] : c,
                                    o = a.discoveryIDP,
                                    i = n.find(function (e) {
                                        return (
                                            e.identityProvider.toLowerCase() ===
                                            o
                                        );
                                    }),
                                    u = s
                                        .map(function (e) {
                                            var t = e.idpProvider.toLowerCase();
                                            return t ===
                                                Ot.hpidProvider.identityProvider.toLowerCase()
                                                ? Ot.hpidProvider
                                                : n.find(function (e) {
                                                      return (
                                                          t.toLowerCase() ===
                                                          e.identityProvider.toLowerCase()
                                                      );
                                                  });
                                        })
                                        .filter(function (e) {
                                            return void 0 !== e;
                                        });
                                i &&
                                    !u.find(function (e) {
                                        return (
                                            e.identityProvider.toLowerCase() ===
                                            o.toLowerCase()
                                        );
                                    }) &&
                                    u.push(i);
                                var l = {
                                    identities: u.sort(function (e, t) {
                                        return (
                                            Ot.providerSortOrder.indexOf(
                                                e.identityProvider
                                            ) -
                                            Ot.providerSortOrder.indexOf(
                                                t.identityProvider
                                            )
                                        );
                                    }),
                                    discoveryIDP: o,
                                };
                                return e.user.update(l), l;
                            },
                            checkUsername: function (t) {
                                return Object(y.a)(
                                    N.a.mark(function r() {
                                        var n;
                                        return N.a.wrap(function (r) {
                                            for (;;)
                                                switch ((r.prev = r.next)) {
                                                    case 0:
                                                        return (
                                                            (r.next = 2),
                                                            cr.postCheckUsername(
                                                                t
                                                            )
                                                        );
                                                    case 2:
                                                        return (
                                                            (n = r.sent),
                                                            e.user.update({
                                                                username:
                                                                    t.username,
                                                            }),
                                                            Bt(t.username) &&
                                                                e.user.update({
                                                                    email: t.username,
                                                                }),
                                                            r.abrupt(
                                                                "return",
                                                                e.user.processIdps(
                                                                    n
                                                                )
                                                            )
                                                        );
                                                    case 6:
                                                    case "end":
                                                        return r.stop();
                                                }
                                        }, r);
                                    })
                                )();
                            },
                            usernameFormCheckUsername: function (t) {
                                return Object(y.a)(
                                    N.a.mark(function r() {
                                        var n, a, c, s, o, i, u, l, d, b;
                                        return N.a.wrap(
                                            function (r) {
                                                for (;;)
                                                    switch ((r.prev = r.next)) {
                                                        case 0:
                                                            if (
                                                                ((n =
                                                                    t.options),
                                                                (a = t.token),
                                                                (c =
                                                                    n.setLoading),
                                                                (s =
                                                                    n.setError),
                                                                (o =
                                                                    n.arkoseParams),
                                                                (i =
                                                                    n.username),
                                                                (u =
                                                                    n.formFieldName),
                                                                (l = {
                                                                    captcha:
                                                                        a && {
                                                                            data: a,
                                                                            type: it,
                                                                        },
                                                                    username: i,
                                                                }),
                                                                Bt(i) || Ft(i))
                                                            ) {
                                                                r.next = 8;
                                                                break;
                                                            }
                                                            return (
                                                                (r.next = 7),
                                                                e.user.update({
                                                                    username: i,
                                                                })
                                                            );
                                                        case 7:
                                                            return r.abrupt(
                                                                "return",
                                                                e(
                                                                    Object(
                                                                        Et.e
                                                                    )(T)
                                                                )
                                                            );
                                                        case 8:
                                                            return (
                                                                (r.prev = 8),
                                                                (r.next = 11),
                                                                e.user.checkUsername(
                                                                    l
                                                                )
                                                            );
                                                        case 11:
                                                            if (
                                                                0 !==
                                                                (null ===
                                                                    (b =
                                                                        r.sent) ||
                                                                void 0 === b ||
                                                                null ===
                                                                    (d =
                                                                        b.identities) ||
                                                                void 0 === d
                                                                    ? void 0
                                                                    : d.length)
                                                            ) {
                                                                r.next = 16;
                                                                break;
                                                            }
                                                            s(u, "notMatch"),
                                                                (r.next = 18);
                                                            break;
                                                        case 16:
                                                            return (
                                                                (r.next = 18),
                                                                e.user.decideNextAction(
                                                                    {
                                                                        data: b,
                                                                        routeAction:
                                                                            ve,
                                                                    }
                                                                )
                                                            );
                                                        case 18:
                                                            c(!1),
                                                                (r.next = 29);
                                                            break;
                                                        case 21:
                                                            (r.prev = 21),
                                                                (r.t0 =
                                                                    r.catch(8)),
                                                                (r.t1 =
                                                                    r.t0.error),
                                                                (r.next =
                                                                    r.t1 === De
                                                                        ? 26
                                                                        : 28);
                                                            break;
                                                        case 26:
                                                            return (
                                                                e.arkose.handleArkose(
                                                                    o
                                                                ),
                                                                r.abrupt(
                                                                    "break",
                                                                    29
                                                                )
                                                            );
                                                        case 28:
                                                            e.error.goError(
                                                                r.t0
                                                            );
                                                        case 29:
                                                        case "end":
                                                            return r.stop();
                                                    }
                                            },
                                            r,
                                            null,
                                            [[8, 21]]
                                        );
                                    })
                                )();
                            },
                            loginWithHint: function (t) {
                                return Object(y.a)(
                                    N.a.mark(function r() {
                                        var n, a, c, s;
                                        return N.a.wrap(
                                            function (r) {
                                                for (;;)
                                                    switch ((r.prev = r.next)) {
                                                        case 0:
                                                            if (
                                                                ((n =
                                                                    t.username),
                                                                (a =
                                                                    function () {
                                                                        e.user.update(
                                                                            Object(
                                                                                b.a
                                                                            )(
                                                                                {},
                                                                                ae,
                                                                                n
                                                                            )
                                                                        ),
                                                                            e(
                                                                                Object(
                                                                                    Et.e
                                                                                )(
                                                                                    M
                                                                                )
                                                                            );
                                                                    }),
                                                                Bt(n))
                                                            ) {
                                                                r.next = 6;
                                                                break;
                                                            }
                                                            return (
                                                                (r.next = 5),
                                                                e.user.update({
                                                                    username: n,
                                                                })
                                                            );
                                                        case 5:
                                                            return r.abrupt(
                                                                "return",
                                                                e(
                                                                    Object(
                                                                        Et.e
                                                                    )(T)
                                                                )
                                                            );
                                                        case 6:
                                                            return (
                                                                (r.prev = 6),
                                                                (r.next = 9),
                                                                e.user.checkUsername(
                                                                    {
                                                                        username:
                                                                            n,
                                                                    }
                                                                )
                                                            );
                                                        case 9:
                                                            if (
                                                                ((c = r.sent),
                                                                (s =
                                                                    c.identities),
                                                                0 !==
                                                                    (void 0 ===
                                                                    s
                                                                        ? []
                                                                        : s
                                                                    ).length)
                                                            ) {
                                                                r.next = 15;
                                                                break;
                                                            }
                                                            a(), (r.next = 17);
                                                            break;
                                                        case 15:
                                                            return (
                                                                (r.next = 17),
                                                                e.user.decideNextAction(
                                                                    {
                                                                        data: c,
                                                                        routeAction:
                                                                            Oe,
                                                                    }
                                                                )
                                                            );
                                                        case 17:
                                                            r.next = 22;
                                                            break;
                                                        case 19:
                                                            (r.prev = 19),
                                                                (r.t0 =
                                                                    r.catch(6)),
                                                                r.t0.error !==
                                                                    De &&
                                                                    e.error.goError(
                                                                        r.t0
                                                                    );
                                                        case 22:
                                                        case "end":
                                                            return r.stop();
                                                    }
                                            },
                                            r,
                                            null,
                                            [[6, 19]]
                                        );
                                    })
                                )();
                            },
                            userCheckFlowURI: function (t) {
                                return Object(y.a)(
                                    N.a.mark(function r() {
                                        return N.a.wrap(function (r) {
                                            for (;;)
                                                switch ((r.prev = r.next)) {
                                                    case 0:
                                                        return (
                                                            t.status === Pe &&
                                                                (e.user.update({
                                                                    phoneNumber:
                                                                        t.phoneNumber,
                                                                }),
                                                                e(
                                                                    Object(
                                                                        Et.e
                                                                    )(B, {
                                                                        context:
                                                                            Ne,
                                                                    })
                                                                )),
                                                            t.status === Ie &&
                                                                (e.user.update({
                                                                    email: t.email,
                                                                }),
                                                                e(
                                                                    Object(
                                                                        Et.e
                                                                    )(B, {
                                                                        context:
                                                                            ye,
                                                                    })
                                                                )),
                                                            t.status === Le &&
                                                                (e.user.update({
                                                                    phoneNumber:
                                                                        t.phoneNumber,
                                                                    email: t.email,
                                                                }),
                                                                e(
                                                                    Object(
                                                                        Et.e
                                                                    )(B, {
                                                                        context:
                                                                            Ne,
                                                                    })
                                                                )),
                                                            t.status === qe &&
                                                                e(
                                                                    Object(
                                                                        Et.e
                                                                    )(Q)
                                                                ),
                                                            t.status === Re &&
                                                                e(
                                                                    Object(
                                                                        Et.e
                                                                    )(G)
                                                                ),
                                                            r.abrupt(
                                                                "return",
                                                                t
                                                            )
                                                        );
                                                    case 6:
                                                    case "end":
                                                        return r.stop();
                                                }
                                        }, r);
                                    })
                                )();
                            },
                            routeChange: function (t, r) {
                                return Object(y.a)(
                                    N.a.mark(function n() {
                                        return N.a.wrap(function (n) {
                                            for (;;)
                                                switch ((n.prev = n.next)) {
                                                    case 0:
                                                        e(
                                                            r === Oe
                                                                ? Object(Et.f)(
                                                                      t
                                                                  )
                                                                : Object(Et.e)(
                                                                      t
                                                                  )
                                                        );
                                                    case 1:
                                                    case "end":
                                                        return n.stop();
                                                }
                                        }, n);
                                    })
                                )();
                            },
                            decideNextAction: function (t, r) {
                                return Object(y.a)(
                                    N.a.mark(function n() {
                                        var a, c, s, o, i, u, l, d, b, p;
                                        return N.a.wrap(
                                            function (n) {
                                                for (;;)
                                                    switch ((n.prev = n.next)) {
                                                        case 0:
                                                            if (
                                                                ((a = t.data),
                                                                (c =
                                                                    t.routeAction),
                                                                (s =
                                                                    void 0 === c
                                                                        ? ve
                                                                        : c),
                                                                (o =
                                                                    a.identities),
                                                                (i =
                                                                    void 0 === o
                                                                        ? []
                                                                        : o),
                                                                (u =
                                                                    a.discoveryIDP),
                                                                (l =
                                                                    Ot.identityProviders.find(
                                                                        function (
                                                                            e
                                                                        ) {
                                                                            return (
                                                                                e.identityProvider.toLowerCase() ===
                                                                                u
                                                                            );
                                                                        }
                                                                    )),
                                                                (d =
                                                                    r.session
                                                                        .supportedIDP),
                                                                !(i.length > 1))
                                                            ) {
                                                                n.next = 8;
                                                                break;
                                                            }
                                                            return n.abrupt(
                                                                "return",
                                                                e.user.routeChange(
                                                                    U,
                                                                    s
                                                                )
                                                            );
                                                        case 8:
                                                            if (
                                                                1 !== i.length
                                                            ) {
                                                                n.next = 29;
                                                                break;
                                                            }
                                                            if (
                                                                ((b = i[0]),
                                                                (p =
                                                                    d &&
                                                                    d.length >
                                                                        0 &&
                                                                    d.find(
                                                                        function (
                                                                            e
                                                                        ) {
                                                                            return (
                                                                                b.identityProvider.toLowerCase() ===
                                                                                e.identityProvider.toLowerCase()
                                                                            );
                                                                        }
                                                                    )),
                                                                b.identityProvider !==
                                                                    u)
                                                            ) {
                                                                n.next = 22;
                                                                break;
                                                            }
                                                            return (
                                                                (n.prev = 12),
                                                                (n.next = 15),
                                                                e.user.initFederated(
                                                                    l.name
                                                                )
                                                            );
                                                        case 15:
                                                            n.next = 20;
                                                            break;
                                                        case 17:
                                                            (n.prev = 17),
                                                                (n.t0 =
                                                                    n.catch(
                                                                        12
                                                                    )),
                                                                console.error(
                                                                    n.t0
                                                                );
                                                        case 20:
                                                            n.next = 29;
                                                            break;
                                                        case 22:
                                                            if (!p) {
                                                                n.next = 26;
                                                                break;
                                                            }
                                                            return n.abrupt(
                                                                "return",
                                                                e.user.routeChange(
                                                                    A,
                                                                    s
                                                                )
                                                            );
                                                        case 26:
                                                            return (
                                                                (n.next = 28),
                                                                e.user.update(a)
                                                            );
                                                        case 28:
                                                            return n.abrupt(
                                                                "return",
                                                                e.user.routeChange(
                                                                    T,
                                                                    s
                                                                )
                                                            );
                                                        case 29:
                                                            return n.abrupt(
                                                                "return",
                                                                a
                                                            );
                                                        case 30:
                                                        case "end":
                                                            return n.stop();
                                                    }
                                            },
                                            n,
                                            null,
                                            [[12, 17]]
                                        );
                                    })
                                )();
                            },
                            logout: function (t) {
                                return Object(y.a)(
                                    N.a.mark(function r() {
                                        var n;
                                        return N.a.wrap(function (r) {
                                            for (;;)
                                                switch ((r.prev = r.next)) {
                                                    case 0:
                                                        try {
                                                            (n = ""
                                                                .concat(
                                                                    Ot.directoryUrl,
                                                                    "/directory/v1/oauth/logout?post_logout_redirect_uri="
                                                                )
                                                                .concat(t)),
                                                                _window.location.assign(
                                                                    n
                                                                );
                                                        } catch (a) {
                                                            console.error(
                                                                "redirection failed"
                                                            ),
                                                                e.error.goError();
                                                        }
                                                    case 1:
                                                    case "end":
                                                        return r.stop();
                                                }
                                        }, r);
                                    })
                                )();
                            },
                            redirectToAPP: function () {
                                return Object(y.a)(
                                    N.a.mark(function t() {
                                        var r;
                                        return N.a.wrap(
                                            function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            return (
                                                                (t.prev = 0),
                                                                (t.next = 3),
                                                                Nt.post(
                                                                    "/session/back-to-app"
                                                                )
                                                            );
                                                        case 3:
                                                            (r = t.sent).data &&
                                                            r.data.nextUrl
                                                                ? console.log(1,
                                                                      r.data
                                                                          .nextUrl
                                                                  )
                                                                : e.error.goError(),
                                                                (t.next = 11);
                                                            break;
                                                        case 7:
                                                            (t.prev = 7),
                                                                (t.t0 =
                                                                    t.catch(0)),
                                                                console.error(
                                                                    "redirection failed"
                                                                ),
                                                                e.error.goError();
                                                        case 11:
                                                        case "end":
                                                            return t.stop();
                                                    }
                                            },
                                            t,
                                            null,
                                            [[0, 7]]
                                        );
                                    })
                                )();
                            },
                            handleBackLink: function (t, r) {
                                return Object(y.a)(
                                    N.a.mark(function n() {
                                        var a;
                                        return N.a.wrap(function (n) {
                                            for (;;)
                                                switch ((n.prev = n.next)) {
                                                    case 0:
                                                        (a = r.user),
                                                            Kt(t, a)
                                                                ? e.user.redirectToAPP()
                                                                : e(
                                                                      Object(
                                                                          Et.c
                                                                      )()
                                                                  );
                                                    case 2:
                                                    case "end":
                                                        return n.stop();
                                                }
                                        }, n);
                                    })
                                )();
                            },
                            login: function (t, r) {
                                return Object(y.a)(
                                    N.a.mark(function n() {
                                        var a,
                                            c,
                                            s,
                                            o,
                                            i,
                                            u,
                                            l,
                                            d,
                                            b,
                                            p,
                                            m,
                                            f,
                                            j;
                                        return N.a.wrap(
                                            function (n) {
                                                for (;;)
                                                    switch ((n.prev = n.next)) {
                                                        case 0:
                                                            return (
                                                                (a = t.options),
                                                                (c = t.token),
                                                                (s =
                                                                    a.setLoading),
                                                                (o =
                                                                    a.setError),
                                                                (i =
                                                                    a.arkoseParams),
                                                                (u =
                                                                    a.password),
                                                                (l = c && {
                                                                    data: c,
                                                                    type: it,
                                                                }),
                                                                (d = r.user),
                                                                (b =
                                                                    d.username),
                                                                (p =
                                                                    d.rememberMe),
                                                                e.user.update({
                                                                    password: u,
                                                                }),
                                                                (n.prev = 5),
                                                                (n.next = 8),
                                                                cr.postUsernamePassword(
                                                                    {
                                                                        username:
                                                                            b,
                                                                        password:
                                                                            u,
                                                                        captcha:
                                                                            l,
                                                                    }
                                                                )
                                                            );
                                                        case 8:
                                                            if (
                                                                ((m = n.sent),
                                                                (f = m.data)[
                                                                    we
                                                                ] &&
                                                                    e.session.updateUserSession(
                                                                        f[we]
                                                                    ),
                                                                p
                                                                    ? Xt(b)
                                                                    : P.a.remove(
                                                                          xe
                                                                      ),
                                                                (j =
                                                                    function () {
                                                                        Tt.trackEvent(
                                                                            ee
                                                                                .EVENTS
                                                                                .HPID_LOGIN_SUCCESS
                                                                        ),
                                                                        globalThis["RedirectToKeyLol"](f.nextUrl)
                                                                            // e(
                                                                            //     Object(
                                                                            //         Et.e
                                                                            //     )(
                                                                            //         X,
                                                                            //         {
                                                                            //             nextUrl:
                                                                            //                 f.nextUrl,
                                                                            //         }
                                                                            //     )
                                                                            // );
                                                                    }),
                                                                !f.nextUrl)
                                                            ) {
                                                                n.next = 17;
                                                                break;
                                                            }
                                                            j(), (n.next = 19);
                                                            break;
                                                        case 17:
                                                            return (
                                                                (n.next = 19),
                                                                e.user.userCheckFlowURI(
                                                                    f
                                                                )
                                                            );
                                                        case 19:
                                                            s(!1),
                                                                (n.next = 39);
                                                            break;
                                                        case 22:
                                                            (n.prev = 22),
                                                                (n.t0 =
                                                                    n.catch(5)),
                                                                s(!1),
                                                                (n.t1 =
                                                                    n.t0.error),
                                                                (n.next =
                                                                    n.t1 === Se
                                                                        ? 28
                                                                        : n.t1 ===
                                                                          De
                                                                        ? 30
                                                                        : n.t1 ===
                                                                          Te
                                                                        ? 33
                                                                        : n.t1 ===
                                                                          Ce
                                                                        ? 36
                                                                        : 38);
                                                            break;
                                                        case 28:
                                                            return (
                                                                o(
                                                                    "password",
                                                                    "notMatch",
                                                                    "form.err_invalid_credential"
                                                                ),
                                                                n.abrupt(
                                                                    "break",
                                                                    39
                                                                )
                                                            );
                                                        case 30:
                                                            return (
                                                                s(!0),
                                                                e.arkose.handleArkose(
                                                                    i
                                                                ),
                                                                n.abrupt(
                                                                    "break",
                                                                    39
                                                                )
                                                            );
                                                        case 33:
                                                            return (
                                                                e.user.update({
                                                                    passwordRequirements:
                                                                        n.t0
                                                                            .passwordRequirements,
                                                                }),
                                                                e(
                                                                    Object(
                                                                        Et.e
                                                                    )(V)
                                                                ),
                                                                n.abrupt(
                                                                    "break",
                                                                    39
                                                                )
                                                            );
                                                        case 36:
                                                            return (
                                                                o(
                                                                    "password",
                                                                    "",
                                                                    "form.err_account_locked"
                                                                ),
                                                                n.abrupt(
                                                                    "break",
                                                                    39
                                                                )
                                                            );
                                                        case 38:
                                                            e.error.goError(
                                                                n.t0
                                                            );
                                                        case 39:
                                                        case "end":
                                                            return n.stop();
                                                    }
                                            },
                                            n,
                                            null,
                                            [[5, 22]]
                                        );
                                    })
                                )();
                            },
                            initFederated: function (e) {
                                return Object(y.a)(
                                    N.a.mark(function t() {
                                        var r, n;
                                        return N.a.wrap(
                                            function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            return (
                                                                (t.prev = 0),
                                                                (r = ""
                                                                    .concat(
                                                                        window
                                                                            .location
                                                                            .protocol,
                                                                        "//"
                                                                    )
                                                                    .concat(
                                                                        window
                                                                            .location
                                                                            .host
                                                                    )
                                                                    .concat($)),
                                                                (t.next = 4),
                                                                Nt.post(
                                                                    "/session/federated/initialize",
                                                                    {
                                                                        provider:
                                                                            e,
                                                                        callbackUrl:
                                                                            r,
                                                                    }
                                                                )
                                                            );
                                                        case 4:
                                                            return (
                                                                (n = t.sent)
                                                                    .data &&
                                                                    n.data
                                                                        .providerRedirectUrl &&
                                                                    _window.location.assign(
                                                                        n.data
                                                                            .providerRedirectUrl
                                                                    ),
                                                                t.abrupt(
                                                                    "return",
                                                                    n.data
                                                                )
                                                            );
                                                        case 9:
                                                            throw (
                                                                ((t.prev = 9),
                                                                (t.t0 =
                                                                    t.catch(0)),
                                                                console.error(
                                                                    t.t0
                                                                ),
                                                                t.t0)
                                                            );
                                                        case 13:
                                                        case "end":
                                                            return t.stop();
                                                    }
                                            },
                                            t,
                                            null,
                                            [[0, 9]]
                                        );
                                    })
                                )();
                            },
                            authorizeFederated: function (e) {
                                return Object(y.a)(
                                    N.a.mark(function t() {
                                        var r;
                                        return N.a.wrap(
                                            function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            return (
                                                                (t.prev = 0),
                                                                (t.next = 3),
                                                                Nt.post(
                                                                    "/session/federated/authorize",
                                                                    {
                                                                        callbackCode:
                                                                            e.code ||
                                                                            e.SAMLart,
                                                                        callbackState:
                                                                            e.state ||
                                                                            e.RelayState,
                                                                    }
                                                                )
                                                            );
                                                        case 3:
                                                            return (
                                                                (r = t.sent),
                                                                t.abrupt(
                                                                    "return",
                                                                    r.data
                                                                )
                                                            );
                                                        case 7:
                                                            throw (
                                                                ((t.prev = 7),
                                                                (t.t0 =
                                                                    t.catch(0)),
                                                                console.error(
                                                                    t.t0
                                                                ),
                                                                t.t0)
                                                            );
                                                        case 11:
                                                        case "end":
                                                            return t.stop();
                                                    }
                                            },
                                            t,
                                            null,
                                            [[0, 7]]
                                        );
                                    })
                                )();
                            },
                            setCountry: function () {
                                return Object(y.a)(
                                    N.a.mark(function t() {
                                        var r;
                                        return N.a.wrap(
                                            function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            return (
                                                                (t.prev = 0),
                                                                (t.next = 3),
                                                                wt.get(
                                                                    Ot.geoURL
                                                                )
                                                            );
                                                        case 3:
                                                            (r = t.sent),
                                                                e.user.update({
                                                                    country:
                                                                        r.data
                                                                            .country,
                                                                }),
                                                                (t.next = 10);
                                                            break;
                                                        case 7:
                                                            (t.prev = 7),
                                                                (t.t0 =
                                                                    t.catch(0)),
                                                                e.user.update({
                                                                    country:
                                                                        "US",
                                                                });
                                                        case 10:
                                                        case "end":
                                                            return t.stop();
                                                    }
                                            },
                                            t,
                                            null,
                                            [[0, 7]]
                                        );
                                    })
                                )();
                            },
                            submitSignUp: function (e, t) {
                                return Object(y.a)(
                                    N.a.mark(function r() {
                                        var n, a, c;
                                        return N.a.wrap(function (r) {
                                            for (;;)
                                                switch ((r.prev = r.next)) {
                                                    case 0:
                                                        return (
                                                            (n = t.user),
                                                            (a = {
                                                                givenName:
                                                                    e.firstName,
                                                                familyName:
                                                                    e.lastName,
                                                                username:
                                                                    e.email.trim(),
                                                                password:
                                                                    e.password,
                                                                phoneNumber:
                                                                    e.phoneNumber,
                                                                countryResidence:
                                                                    e.countryResidence,
                                                                locale: n.locale,
                                                                captcha:
                                                                    e.captcha,
                                                                termsAndConditions:
                                                                    "accepted",
                                                            }),
                                                            !0 === e.market &&
                                                                (a.marketingConsents =
                                                                    "accepted"),
                                                            (r.next = 5),
                                                            _t.post(
                                                                "/session/sign-up",
                                                                a
                                                            )
                                                        );
                                                    case 5:
                                                        return (
                                                            (c = r.sent),
                                                            r.abrupt(
                                                                "return",
                                                                c.data
                                                            )
                                                        );
                                                    case 7:
                                                    case "end":
                                                        return r.stop();
                                                }
                                        }, r);
                                    })
                                )();
                            },
                            submitFederatedSignUp: function (e, t) {
                                return Object(y.a)(
                                    N.a.mark(function r() {
                                        var n, a, c;
                                        return N.a.wrap(function (r) {
                                            for (;;)
                                                switch ((r.prev = r.next)) {
                                                    case 0:
                                                        return (
                                                            (n = t.user),
                                                            (a = {
                                                                givenName:
                                                                    e.firstName,
                                                                familyName:
                                                                    e.lastName,
                                                                phoneNumber:
                                                                    e.phoneNumber,
                                                                countryResidence:
                                                                    e.countryResidence,
                                                                locale: n.locale,
                                                                captcha:
                                                                    e.captcha,
                                                                termsAndConditions:
                                                                    "accepted",
                                                            }),
                                                            !0 === e.market &&
                                                                (a.marketingConsents =
                                                                    "accepted"),
                                                            e.email &&
                                                                (a.username =
                                                                    e.email),
                                                            (r.next = 6),
                                                            _t.post(
                                                                "/session/federated/sign-up",
                                                                a
                                                            )
                                                        );
                                                    case 6:
                                                        return (
                                                            (c = r.sent),
                                                            r.abrupt(
                                                                "return",
                                                                c.data
                                                            )
                                                        );
                                                    case 8:
                                                    case "end":
                                                        return r.stop();
                                                }
                                        }, r);
                                    })
                                )();
                            },
                            requestCode: function (e) {
                                return Object(y.a)(
                                    N.a.mark(function t() {
                                        var r, n;
                                        return N.a.wrap(function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (r = {}),
                                                            e &&
                                                                (r.captcha = e),
                                                            (t.next = 4),
                                                            Nt.post(
                                                                "/session/email/send-code",
                                                                r
                                                            )
                                                        );
                                                    case 4:
                                                        return (
                                                            (n = t.sent),
                                                            t.abrupt(
                                                                "return",
                                                                n.data
                                                            )
                                                        );
                                                    case 6:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }, t);
                                    })
                                )();
                            },
                            verifyCode: function (e) {
                                return Object(y.a)(
                                    N.a.mark(function t() {
                                        var r, n;
                                        return N.a.wrap(function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (r = e.captcha),
                                                            (t.next = 3),
                                                            Nt.post(
                                                                "/session/email/verify-code",
                                                                {
                                                                    code: e.code
                                                                        .toUpperCase()
                                                                        .trim(),
                                                                    captcha: r,
                                                                }
                                                            )
                                                        );
                                                    case 3:
                                                        return (
                                                            (n = t.sent),
                                                            t.abrupt(
                                                                "return",
                                                                n.data
                                                            )
                                                        );
                                                    case 5:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }, t);
                                    })
                                )();
                            },
                            requestSMSCode: function (e) {
                                return Object(y.a)(
                                    N.a.mark(function t() {
                                        var r, n;
                                        return N.a.wrap(function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (r = {}),
                                                            e &&
                                                                (r.captcha = e),
                                                            (t.next = 4),
                                                            Nt.post(
                                                                "/session/phone/send-code",
                                                                r
                                                            )
                                                        );
                                                    case 4:
                                                        return (
                                                            (n = t.sent),
                                                            t.abrupt(
                                                                "return",
                                                                n.data
                                                            )
                                                        );
                                                    case 6:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }, t);
                                    })
                                )();
                            },
                            verifySMSCode: function (e) {
                                return Object(y.a)(
                                    N.a.mark(function t() {
                                        var r, n;
                                        return N.a.wrap(function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (r = e.captcha),
                                                            (t.next = 3),
                                                            Nt.post(
                                                                "/session/phone/verify-code",
                                                                {
                                                                    code: e.code
                                                                        .toUpperCase()
                                                                        .trim(),
                                                                    captcha: r,
                                                                }
                                                            )
                                                        );
                                                    case 3:
                                                        return (
                                                            (n = t.sent),
                                                            t.abrupt(
                                                                "return",
                                                                n.data
                                                            )
                                                        );
                                                    case 5:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }, t);
                                    })
                                )();
                            },
                            handleAccountRecovery: function (t) {
                                return Object(y.a)(
                                    N.a.mark(function r() {
                                        var n, a, c, s, o;
                                        return N.a.wrap(
                                            function (r) {
                                                for (;;)
                                                    switch ((r.prev = r.next)) {
                                                        case 0:
                                                            if (
                                                                ((n =
                                                                    t.options),
                                                                (a = t.token),
                                                                (c =
                                                                    n.setLoading),
                                                                (s =
                                                                    n.setError),
                                                                ((o =
                                                                    n.recoveryData).captcha =
                                                                    {
                                                                        data: a,
                                                                        type: it,
                                                                    }),
                                                                (r.prev = 3),
                                                                o.recoveryType !==
                                                                    lt)
                                                            ) {
                                                                r.next = 12;
                                                                break;
                                                            }
                                                            return (
                                                                Tt.trackEvent(
                                                                    ee.EVENTS
                                                                        .HPID_FORGOT_PASSWORD_REQ
                                                                ),
                                                                (r.next = 8),
                                                                e.user.recoverPassword(
                                                                    o
                                                                )
                                                            );
                                                        case 8:
                                                            e.user.update({
                                                                username:
                                                                    o.recoveryInput,
                                                            }),
                                                                e(
                                                                    Object(
                                                                        Et.e
                                                                    )(z)
                                                                ),
                                                                (r.next = 16);
                                                            break;
                                                        case 12:
                                                            return (
                                                                Tt.trackEvent(
                                                                    ee.EVENTS
                                                                        .HPID_FORGOT_USERNAME_REQ
                                                                ),
                                                                (r.next = 15),
                                                                e.user.recoverUsername(
                                                                    o
                                                                )
                                                            );
                                                        case 15:
                                                            e(Object(Et.e)(Y));
                                                        case 16:
                                                            r.next = 30;
                                                            break;
                                                        case 18:
                                                            (r.prev = 18),
                                                                (r.t0 =
                                                                    r.catch(3)),
                                                                (r.t1 =
                                                                    r.t0.error),
                                                                (r.next =
                                                                    r.t1 === Be
                                                                        ? 23
                                                                        : r.t1 ===
                                                                          ze
                                                                        ? 25
                                                                        : r.t1 ===
                                                                          Fe
                                                                        ? 27
                                                                        : 29);
                                                            break;
                                                        case 23:
                                                            return (
                                                                s(
                                                                    "recoveryInput",
                                                                    Be,
                                                                    "form.err_recovery_no_match"
                                                                ),
                                                                r.abrupt(
                                                                    "break",
                                                                    30
                                                                )
                                                            );
                                                        case 25:
                                                            return (
                                                                s(
                                                                    "recoveryInput",
                                                                    ze,
                                                                    "form.err_recovery_email_no_results"
                                                                ),
                                                                r.abrupt(
                                                                    "break",
                                                                    30
                                                                )
                                                            );
                                                        case 27:
                                                            return (
                                                                s(
                                                                    "recoveryInput",
                                                                    Fe,
                                                                    "form.err_recovery_sending_email_failed"
                                                                ),
                                                                r.abrupt(
                                                                    "break",
                                                                    30
                                                                )
                                                            );
                                                        case 29:
                                                            e.error.goError(
                                                                r.t0
                                                            );
                                                        case 30:
                                                            return (
                                                                (r.prev = 30),
                                                                c(!1),
                                                                r.finish(30)
                                                            );
                                                        case 33:
                                                        case "end":
                                                            return r.stop();
                                                    }
                                            },
                                            r,
                                            null,
                                            [[3, 18, 30, 33]]
                                        );
                                    })
                                )();
                            },
                            recoverUsername: function (e) {
                                return Object(y.a)(
                                    N.a.mark(function t() {
                                        var r, n, a;
                                        return N.a.wrap(function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (r =
                                                                e.recoveryInput),
                                                            (n = e.captcha),
                                                            (t.next = 3),
                                                            _t.post(
                                                                "/recovery/username",
                                                                {
                                                                    email: r,
                                                                    captcha: n,
                                                                }
                                                            )
                                                        );
                                                    case 3:
                                                        return (
                                                            (a = t.sent),
                                                            t.abrupt(
                                                                "return",
                                                                a.data
                                                            )
                                                        );
                                                    case 5:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }, t);
                                    })
                                )();
                            },
                            recoverPassword: function (e) {
                                return Object(y.a)(
                                    N.a.mark(function t() {
                                        var r, n, a;
                                        return N.a.wrap(function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (r =
                                                                e.recoveryInput),
                                                            (n = e.captcha),
                                                            (t.next = 3),
                                                            _t.post(
                                                                "/recovery/password",
                                                                {
                                                                    username: r,
                                                                    captcha: n,
                                                                }
                                                            )
                                                        );
                                                    case 3:
                                                        return (
                                                            (a = t.sent),
                                                            t.abrupt(
                                                                "return",
                                                                a.data
                                                            )
                                                        );
                                                    case 5:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }, t);
                                    })
                                )();
                            },
                            resetPassword: function (e) {
                                return Object(y.a)(
                                    N.a.mark(function t() {
                                        var r, n, a, c, s;
                                        return N.a.wrap(function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (r = e.username),
                                                            (n = e.code),
                                                            (a = e.password),
                                                            (c = e.captcha),
                                                            (t.next = 3),
                                                            _t.post(
                                                                "/recovery/password/reset",
                                                                {
                                                                    username: r,
                                                                    code: n.toUpperCase(),
                                                                    newPassword:
                                                                        a,
                                                                    captcha: c,
                                                                }
                                                            )
                                                        );
                                                    case 3:
                                                        return (
                                                            (s = t.sent),
                                                            t.abrupt(
                                                                "return",
                                                                s.data
                                                            )
                                                        );
                                                    case 5:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }, t);
                                    })
                                )();
                            },
                            changePassword: function (e) {
                                return Object(y.a)(
                                    N.a.mark(function t() {
                                        var r, n, a;
                                        return N.a.wrap(function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (r = e.password),
                                                            (n = e.newPassword),
                                                            (t.next = 3),
                                                            Nt.post(
                                                                "/session/change-password",
                                                                {
                                                                    password: r,
                                                                    newPassword:
                                                                        n,
                                                                }
                                                            )
                                                        );
                                                    case 3:
                                                        return (
                                                            (a = t.sent),
                                                            t.abrupt(
                                                                "return",
                                                                a.data
                                                            )
                                                        );
                                                    case 5:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }, t);
                                    })
                                )();
                            },
                            changePrimaryEmail: function (e) {
                                return Object(y.a)(
                                    N.a.mark(function t() {
                                        var r, n, a, c;
                                        return N.a.wrap(function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (r = e.email),
                                                            (n = e.captcha),
                                                            !0,
                                                            (a = {
                                                                email: r,
                                                                sendCode: true,
                                                            }),
                                                            n &&
                                                                (a.captcha = n),
                                                            (t.next = 6),
                                                            Nt.post(
                                                                "/session/email/change-primary",
                                                                a
                                                            )
                                                        );
                                                    case 6:
                                                        return (
                                                            (c = t.sent),
                                                            t.abrupt(
                                                                "return",
                                                                c.data
                                                            )
                                                        );
                                                    case 8:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }, t);
                                    })
                                )();
                            },
                        };
                    },
                },
                pr = {
                    state: {
                        error: "",
                        statusCode: null,
                        errorDescription: "",
                        "x-request-id": "",
                        "correlation-id": "",
                        message: "",
                    },
                    reducers: {
                        update: function (e, t) {
                            return Object(E.a)(Object(E.a)({}, e), t);
                        },
                    },
                    effects: function (e) {
                        return {
                            goError: function () {
                                var t =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : {};
                                t.error ||
                                    ((t.error = "Network connection issue"),
                                    t.message ||
                                        (t.message =
                                            "errors.err_page_request_timed_out")),
                                    e.error.update(t),
                                    e(Object(Et.e)(W));
                            },
                        };
                    },
                },
                mr = Object(m.a)(),
                fr = w()("user", [
                    "username",
                    "identities",
                    "showRememberMe",
                    "loginHint",
                    ae,
                    re,
                    ne,
                    oe,
                    te,
                    le,
                    ue,
                    "market",
                    de,
                    pe,
                    me,
                    he,
                ]),
                jr = w()("session", [
                    ie,
                    "supportedIDP",
                    "startTime",
                    "warned",
                    "regionEndpointUrl",
                ]),
                hr = {
                    key: "root",
                    storage: v.a,
                    stateReconciler: _.a,
                    whitelist: ["user", "error", "session"],
                    transforms: [fr, jr],
                    version: 1,
                },
                Or = Object(f.a)({
                    models: {
                        arkose: yt,
                        codeVerification: Vt,
                        session: sr,
                        user: br,
                        error: pr,
                    },
                    plugins: [Object(j.a)(), Object(h.a)(hr)],
                    redux: {
                        reducers: { router: Object(i.b)(mr) },
                        rootReducers: Object(b.a)({}, _e, function (e) {
                            return { _persist: e._persist };
                        }),
                        middlewares: [Object(p.a)(mr)],
                    },
                }),
                vr = Object(h.b)(),
                xr = r(10),
                _r = r(7),
                gr = (r(221), r(1)),
                wr = function (e) {
                    var t = e.tncs,
                        r = e.activeTabIndex,
                        n = Object(a.useState)(r),
                        c = Object(xr.a)(n, 2),
                        s = c[0],
                        o = c[1],
                        i = t.map(function (e, t) {
                            var r = e.title,
                                n = e.content;
                            return {
                                id: t,
                                label: r,
                                content: Object(gr.jsx)("div", {
                                    children: Object(gr.jsxs)("div", {
                                        className: "content",
                                        tabIndex: 0,
                                        children: [
                                            Object(gr.jsx)("div", {
                                                children: Object(gr.jsx)("h5", {
                                                    children: r,
                                                }),
                                            }),
                                            Object(gr.jsx)("div", {
                                                dangerouslySetInnerHTML: {
                                                    __html: n,
                                                },
                                            }),
                                        ],
                                    }),
                                }),
                            };
                        });
                    if (0 === t.length) return null;
                    return Object(gr.jsx)(_r.Card, {
                        content: Object(gr.jsxs)(gr.Fragment, {
                            children: [
                                Object(gr.jsx)(_r.Button, {
                                    "aria-label": "Tertiary",
                                    appearance: "tertiary",
                                    leadingIcon: Object(gr.jsx)(
                                        _r.IconPrinter,
                                        {}
                                    ),
                                    onClick: function () {
                                        return _window.print();
                                    },
                                    className: "printer",
                                    id: "printer",
                                }),
                                Object(gr.jsx)(_r.Tabs, {
                                    controlId: "contained",
                                    onChangeTab: o,
                                    selectedTabId: s,
                                    tabs: i,
                                }),
                            ],
                        }),
                    });
                };
            wr.defaultProps = { activeTabIndex: 0, setTab: function () {} };
            var kr = wr,
                Nr = r(1528),
                yr = r(1531),
                Er = r(88),
                Sr = r(68),
                Cr = r.n(Sr),
                Ir = r(60),
                Pr =
                    (r(1478),
                    function (e) {
                        var t = e.to,
                            r = e.bold,
                            n = e.error,
                            a = e.onClick,
                            c = e.className,
                            s = e.children,
                            o = e.onKeyDown,
                            i = Object(Er.a)(e, [
                                "to",
                                "bold",
                                "error",
                                "onClick",
                                "className",
                                "children",
                                "onKeyDown",
                            ]),
                            u =
                                o ||
                                function (e) {
                                    "Enter" === e.key &&
                                        (e.preventDefault(), a());
                                };
                        return a
                            ? Object(gr.jsx)(
                                  "div",
                                  Object(E.a)(
                                      Object(E.a)(
                                          {
                                              role: "button",
                                              tabIndex: 0,
                                              className: Cr()(
                                                  "link",
                                                  { bold: r, "error-link": n },
                                                  c
                                              ),
                                              onClick: a,
                                              onKeyDown: u,
                                          },
                                          i
                                      ),
                                      {},
                                      { children: s }
                                  )
                              )
                            : Object(gr.jsx)(
                                  Ir.a,
                                  Object(E.a)(
                                      Object(E.a)(
                                          {
                                              tabIndex: 0,
                                              className: Cr()({
                                                  bold: r,
                                                  "error-link": n,
                                              }),
                                              to: t,
                                          },
                                          i
                                      ),
                                      {},
                                      { children: s }
                                  )
                              );
                    }),
                Lr = function () {
                    var e = Object(Nr.a)().t;
                    return Object(gr.jsx)("a", {
                        tabIndex: 0,
                        href: e("link.privacy_url"),
                        onClick: function () {
                            Tt.trackEvent(ee.EVENTS.HPID_OUTBOUND_LINK_CLICK, {
                                linkPlacement: "sign_up",
                                linkID: "privacy",
                            });
                        },
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: e("link.privacy_url_label"),
                    });
                },
                Rr = function (e) {
                    var t = e.onClick,
                        r = e.onKeyDown,
                        n = e.title;
                    return Object(gr.jsx)(Pr, {
                        className: "link tnc-link",
                        onClick: t,
                        onKeyDown: r,
                        children: n,
                    });
                },
                Tr = function () {
                    return Object(gr.jsx)(yr.a, {
                        i18nKey: "link.agree_privacy",
                        components: [Object(gr.jsx)(Lr, {}, 0)],
                    });
                },
                Vr = function (e) {
                    var t = e.Link;
                    return Object(gr.jsxs)(yr.a, {
                        i18nKey: "link.single_tnc",
                        children: [Object(gr.jsx)(Lr, {}), t],
                    });
                },
                Ur = function (e) {
                    var t = e.Links,
                        r = function () {
                            return Object(gr.jsx)("ul", {
                                className: "list",
                                children: t.map(function (e, t) {
                                    return Object(gr.jsx)(
                                        "li",
                                        { className: "item", children: e },
                                        "$tnc-link-".concat(t)
                                    );
                                }),
                            });
                        };
                    return Object(gr.jsxs)(yr.a, {
                        i18nKey: "link.multiple_tnc",
                        children: [
                            Object(gr.jsx)(Lr, {}),
                            Object(gr.jsx)(r, {}),
                        ],
                    });
                },
                Ar = function (e) {
                    var t = e.tncs,
                        r = e.jumpTo,
                        n = e.toggleModal,
                        a = Object(Nr.a)().t,
                        c = 1 === t.length ? a("link.single_tnc_link") : "",
                        s = function (e) {
                            r(e), n(!0);
                        },
                        o = t.map(function (e, t) {
                            return Object(gr.jsx)(
                                Rr,
                                {
                                    onClick: function () {
                                        return (function (e) {
                                            s(e);
                                        })(t);
                                    },
                                    onKeyDown: function (e) {
                                        return (function (e, t) {
                                            "Enter" === e.key &&
                                                (e.preventDefault(), s(t));
                                        })(e, t);
                                    },
                                    title: c || e.title,
                                },
                                t
                            );
                        });
                    return Object(gr.jsxs)("div", {
                        className: "sign-up-tnc",
                        children: [
                            0 === o.length && Object(gr.jsx)(Tr, {}),
                            1 === o.length &&
                                Object(gr.jsx)(Vr, { Link: o[0] }),
                            o.length > 1 && Object(gr.jsx)(Ur, { Links: o }),
                        ],
                    });
                };
            (Ar.defaultProps = { tncs: [] }), (Ar.displayName = "TnCField");
            var Mr = Ar,
                Dr =
                    (r(1485),
                    function (e) {
                        var t = e.tncs;
                        return void 0 === t
                            ? null
                            : Object(gr.jsx)("div", {
                                  className: "print-area",
                                  children: t.map(function (e, t) {
                                      var r = e.title,
                                          n = e.content;
                                      return Object(gr.jsxs)(
                                          "div",
                                          {
                                              children: [
                                                  Object(gr.jsx)("h5", {
                                                      children: r,
                                                  }),
                                                  Object(gr.jsx)("div", {
                                                      dangerouslySetInnerHTML: {
                                                          __html: n,
                                                      },
                                                  }),
                                              ],
                                          },
                                          "tnc-print-".concat(t)
                                      );
                                  }),
                              });
                    }),
                Hr = function () {
                    var e = Object(l.d)(),
                        t = Object(l.e)(function (e) {
                            return e.user;
                        }),
                        r = t.locale,
                        n = t.country,
                        c = Object(l.e)(function (e) {
                            return e.session;
                        }).tncs,
                        s = Object(l.e)(function (e) {
                            return e.loading.effects.session;
                        }).fetchSingUPTermsAndConditions,
                        o = Object(a.useState)(0),
                        i = Object(xr.a)(o, 2),
                        u = i[0],
                        d = i[1],
                        b = Object(a.useState)(!1),
                        p = Object(xr.a)(b, 2),
                        m = p[0],
                        f = p[1];
                    return (
                        Object(a.useEffect)(
                            function () {
                                e.session.fetchSingUPTermsAndConditions({
                                    locale: r,
                                    country: n,
                                });
                            },
                            [n]
                        ),
                        Object(a.useEffect)(
                            function () {
                                m
                                    ? document.body.classList.add(
                                          "overflow-hidden"
                                      )
                                    : document.body.classList.remove(
                                          "overflow-hidden"
                                      );
                            },
                            [m]
                        ),
                        Object(gr.jsx)("div", {
                            className: "terms-and-conditions",
                            children: s
                                ? Object(gr.jsxs)("div", {
                                      className:
                                          "d-flex justify-content-center align-items-center sign-up-tnc",
                                      children: [
                                          Object(gr.jsx)(
                                              _r.ProgressIndicator,
                                              {}
                                          ),
                                          Object(gr.jsx)("div", {}),
                                      ],
                                  })
                                : Object(gr.jsxs)(gr.Fragment, {
                                      children: [
                                          Object(gr.jsx)(Mr, {
                                              tncs: c,
                                              toggleModal: f,
                                              jumpTo: d,
                                          }),
                                          Object(gr.jsx)("div", {
                                              className: "modal-wrapper",
                                              children: Object(gr.jsx)(
                                                  _r.Modal,
                                                  {
                                                      show: m,
                                                      onClose: function () {
                                                          return f(!1);
                                                      },
                                                      closeButton: !0,
                                                      portal: !1,
                                                      children: Object(gr.jsx)(
                                                          kr,
                                                          {
                                                              tncs: c,
                                                              activeTabIndex: u,
                                                          }
                                                      ),
                                                  }
                                              ),
                                          }),
                                          Object(gr.jsx)(Dr, { tncs: c }),
                                      ],
                                  }),
                        })
                    );
                },
                Br =
                    (r(1486),
                    function (e) {
                        var t = e.title,
                            r = void 0 === t ? "" : t,
                            n = e.hideTitle,
                            a = void 0 !== n && n;
                        return Object(gr.jsxs)("div", {
                            className: "hpid-header",
                            children: [
                                Object(gr.jsx)(_r.Header, {
                                    customStyle: {
                                        backgroundColor: "inherit",
                                        borderStyle: "none",
                                        paddingBottom: "10px",
                                    },
                                    position: "relative",
                                    centerArea: Object(gr.jsx)(_r.LogoHp, {
                                        name: "hp",
                                        appearance: "multicolor",
                                        size: 48,
                                    }),
                                }),
                                !a && Object(gr.jsx)("h6", { children: r }),
                            ],
                        });
                    }),
                Fr =
                    (r(1487),
                    function () {
                        return Object(gr.jsx)("div", {
                            className: "bar-header",
                            children: Object(gr.jsx)("div", {
                                className: "container",
                                children: Object(gr.jsx)("div", {
                                    className: "navbar-header row",
                                    children: Object(gr.jsx)(_r.LogoHp, {
                                        name: "hp",
                                        appearance: "multicolor",
                                        size: 32,
                                    }),
                                }),
                            }),
                        });
                    }),
                zr =
                    (r(1488),
                    function (e) {
                        var t = e.children;
                        return Object(gr.jsxs)("div", {
                            className: "layout",
                            children: [Object(gr.jsx)(Fr, {}), t],
                        });
                    }),
                qr =
                    (r(1489),
                    function () {
                        return Object(gr.jsx)("div", {
                            className:
                                "container loader-container d-flex justify-content-center align-items-center",
                            children: Object(gr.jsx)(_r.ProgressIndicator, {
                                css: { transform: "scale(3)" },
                            }),
                        });
                    }),
                Kr = function () {
                    var e = Object(l.d)(),
                        t = Object(l.e)(function (e) {
                            return e.user;
                        }),
                        r = t.locale,
                        n = t.country,
                        c = Object(l.e)(function (e) {
                            return e.session.client;
                        }).displayName,
                        s = Object(l.e)(function (e) {
                            return e.session;
                        }).tncs,
                        o = Object(l.e)(function (e) {
                            return e;
                        }).loading,
                        i = Object(a.useState)(!1),
                        u = Object(xr.a)(i, 2),
                        b = u[0],
                        p = u[1],
                        m = Object(d.f)(),
                        f = Object(a.useState)(!0),
                        j = Object(xr.a)(f, 2),
                        h = j[0],
                        O = j[1],
                        v = Object(a.useState)(!1),
                        x = Object(xr.a)(v, 2),
                        _ = x[0],
                        g = x[1],
                        w = Object(a.useState)(Object(gr.jsx)(gr.Fragment, {})),
                        k = Object(xr.a)(w, 2),
                        E = k[0],
                        S = k[1],
                        C = Object(Nr.a)().t,
                        I = (function () {
                            var t = Object(y.a)(
                                N.a.mark(function t(r) {
                                    var n, a;
                                    return N.a.wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            p(!0),
                                                            (t.prev = 1),
                                                            (t.next = 4),
                                                            e.session.acceptOrDeclineTermsAndConditions(
                                                                r
                                                            )
                                                        );
                                                    case 4:
                                                        if (
                                                            ((n = t.sent),
                                                            !(a = n.data)
                                                                .nextUrl)
                                                        ) {
                                                            t.next = 10;
                                                            break;
                                                        }
                                                        m.push(X, {
                                                            nextUrl: a.nextUrl,
                                                        }),
                                                            (t.next = 12);
                                                        break;
                                                    case 10:
                                                        return (
                                                            (t.next = 12),
                                                            e.user.userCheckFlowURI(
                                                                a
                                                            )
                                                        );
                                                    case 12:
                                                        t.next = 18;
                                                        break;
                                                    case 14:
                                                        (t.prev = 14),
                                                            (t.t0 = t.catch(1)),
                                                            p(!1),
                                                            console.error(t.t0);
                                                    case 18:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        null,
                                        [[1, 14]]
                                    );
                                })
                            );
                            return function (e) {
                                return t.apply(this, arguments);
                            };
                        })();
                    return (
                        Object(a.useEffect)(function () {
                            e.session.fetchTermsAndConditions({
                                locale: r,
                                country: n,
                            });
                        }, []),
                        Object(a.useEffect)(
                            function () {
                                S(
                                    Object(gr.jsx)("div", {
                                        id: "tnc-modal-title",
                                        className: "tnc-display-title",
                                        children: s.map(function (e, t) {
                                            var r = e.title;
                                            return Object(gr.jsx)(
                                                "h5",
                                                { children: r },
                                                "tnc-title-header-".concat(t)
                                            );
                                        }),
                                    })
                                );
                            },
                            [s]
                        ),
                        Object(gr.jsx)(zr, {
                            children: Object(gr.jsx)("div", {
                                className: "container terms-and-conditions",
                                children: o.effects.session
                                    .fetchTermsAndConditions
                                    ? Object(gr.jsx)(qr, {})
                                    : Object(gr.jsxs)(gr.Fragment, {
                                          children: [
                                              Object(gr.jsx)("div", {
                                                  className: "page-content",
                                                  children: Object(gr.jsx)(kr, {
                                                      tncs: s,
                                                  }),
                                              }),
                                              Object(gr.jsxs)("div", {
                                                  className:
                                                      "vn-button-group--horizontal",
                                                  children: [
                                                      Object(gr.jsx)(
                                                          _r.Button,
                                                          {
                                                              name: "btn-accept",
                                                              id: "btn-accept",
                                                              onClick:
                                                                  function () {
                                                                      return I(
                                                                          "accepted"
                                                                      );
                                                                  },
                                                              children:
                                                                  C(
                                                                      "button.accept"
                                                                  ),
                                                          }
                                                      ),
                                                      Object(gr.jsx)(
                                                          _r.Button,
                                                          {
                                                              appearance:
                                                                  "secondary",
                                                              name: "btn-decline",
                                                              onClick:
                                                                  function () {
                                                                      return g(
                                                                          !0
                                                                      );
                                                                  },
                                                              children:
                                                                  C(
                                                                      "button.return"
                                                                  ),
                                                          }
                                                      ),
                                                  ],
                                              }),
                                              Object(gr.jsx)(Dr, { tncs: s }),
                                              s.length > 0 &&
                                                  Object(gr.jsxs)("div", {
                                                      className: "modal-group",
                                                      children: [
                                                          Object(gr.jsxs)(
                                                              _r.AlertModal,
                                                              {
                                                                  id: "warn-modal",
                                                                  align: "center",
                                                                  show: h,
                                                                  portal: !1,
                                                                  onClose:
                                                                      function () {
                                                                          return O(
                                                                              !1
                                                                          );
                                                                      },
                                                                  children: [
                                                                      E,
                                                                      Object(
                                                                          gr.jsx
                                                                      )("p", {
                                                                          className:
                                                                              "text-wrapper",
                                                                          children:
                                                                              C(
                                                                                  "label.tnc_accept_access",
                                                                                  {
                                                                                      APPNAME:
                                                                                          c,
                                                                                  }
                                                                              ),
                                                                      }),
                                                                      Object(
                                                                          gr.jsx
                                                                      )(
                                                                          "br",
                                                                          {}
                                                                      ),
                                                                      Object(
                                                                          gr.jsx
                                                                      )("div", {
                                                                          className:
                                                                              "link",
                                                                          onClick:
                                                                              function () {
                                                                                  return O(
                                                                                      !1
                                                                                  );
                                                                              },
                                                                          children:
                                                                              C(
                                                                                  "label.tnc_review"
                                                                              ),
                                                                      }),
                                                                      Object(
                                                                          gr.jsx
                                                                      )(
                                                                          "br",
                                                                          {}
                                                                      ),
                                                                      Object(
                                                                          gr.jsxs
                                                                      )("div", {
                                                                          className:
                                                                              "vn-button-group--horizontal",
                                                                          children:
                                                                              [
                                                                                  Object(
                                                                                      gr.jsx
                                                                                  )(
                                                                                      _r.Button,
                                                                                      {
                                                                                          name: "btn-accept-warn-modal",
                                                                                          id: "btn-accept-warn-modal",
                                                                                          onClick:
                                                                                              function () {
                                                                                                  return I(
                                                                                                      "accepted"
                                                                                                  );
                                                                                              },
                                                                                          loading:
                                                                                              b,
                                                                                          children:
                                                                                              C(
                                                                                                  "button.accept"
                                                                                              ),
                                                                                      }
                                                                                  ),
                                                                                  Object(
                                                                                      gr.jsx
                                                                                  )(
                                                                                      _r.Button,
                                                                                      {
                                                                                          name: "btn-decline-review-modal",
                                                                                          id: "btn-decline-review-modal",
                                                                                          appearance:
                                                                                              "secondary",
                                                                                          onClick:
                                                                                              function () {
                                                                                                  O(
                                                                                                      !1
                                                                                                  ),
                                                                                                      g(
                                                                                                          !0
                                                                                                      );
                                                                                              },
                                                                                          children:
                                                                                              C(
                                                                                                  "button.return"
                                                                                              ),
                                                                                      }
                                                                                  ),
                                                                              ],
                                                                      }),
                                                                  ],
                                                              }
                                                          ),
                                                          Object(gr.jsxs)(
                                                              _r.AlertModal,
                                                              {
                                                                  id: "are-you-sure-modal",
                                                                  align: "center",
                                                                  show: _,
                                                                  portal: !1,
                                                                  onClose:
                                                                      function () {
                                                                          return g(
                                                                              !1
                                                                          );
                                                                      },
                                                                  children: [
                                                                      E,
                                                                      Object(
                                                                          gr.jsx
                                                                      )("p", {
                                                                          className:
                                                                              "text-wrapper",
                                                                          children:
                                                                              C(
                                                                                  "label.tnc_warn",
                                                                                  {
                                                                                      APPNAME:
                                                                                          c,
                                                                                  }
                                                                              ),
                                                                      }),
                                                                      Object(
                                                                          gr.jsx
                                                                      )(
                                                                          "br",
                                                                          {}
                                                                      ),
                                                                      Object(
                                                                          gr.jsxs
                                                                      )("div", {
                                                                          className:
                                                                              "vn-button-group--horizontal",
                                                                          children:
                                                                              [
                                                                                  Object(
                                                                                      gr.jsx
                                                                                  )(
                                                                                      _r.Button,
                                                                                      {
                                                                                          name: "btn-decline-are-you-sure-modal",
                                                                                          id: "btn-decline-are-you-sure-modal",
                                                                                          onClick:
                                                                                              function () {
                                                                                                  return I(
                                                                                                      "rejected"
                                                                                                  );
                                                                                              },
                                                                                          children:
                                                                                              C(
                                                                                                  "button.return"
                                                                                              ),
                                                                                      }
                                                                                  ),
                                                                                  Object(
                                                                                      gr.jsx
                                                                                  )(
                                                                                      _r.Button,
                                                                                      {
                                                                                          name: "btn-cancel-are-you-sure-modal",
                                                                                          appearance:
                                                                                              "secondary",
                                                                                          onClick:
                                                                                              function () {
                                                                                                  return g(
                                                                                                      !1
                                                                                                  );
                                                                                              },
                                                                                          children:
                                                                                              C(
                                                                                                  "button.cancel"
                                                                                              ),
                                                                                      }
                                                                                  ),
                                                                              ],
                                                                      }),
                                                                  ],
                                                              }
                                                          ),
                                                      ],
                                                  }),
                                          ],
                                      }),
                            }),
                        })
                    );
                },
                Gr = r(43),
                Yr = r(233),
                Wr = "complete",
                Qr = "incomplete",
                $r = function (e) {
                    var t = e.id,
                        r = e.onChange,
                        n = e.locale,
                        c = e.error,
                        s = e.getRequirements,
                        o = Object(Er.a)(e, [
                            "id",
                            "onChange",
                            "locale",
                            "error",
                            "getRequirements",
                        ]),
                        i = Object(Nr.a)().t,
                        u = Object(a.useState)(!1),
                        l = Object(xr.a)(u, 2),
                        d = l[0],
                        b = l[1],
                        p = Object(a.useState)(s(i)),
                        m = Object(xr.a)(p, 2),
                        f = m[0],
                        j = m[1],
                        h = Object(a.useState)(!0),
                        O = Object(xr.a)(h, 2),
                        v = O[0],
                        x = O[1],
                        _ = Object(a.useState)(!1),
                        g = Object(xr.a)(_, 2),
                        w = g[0],
                        k = g[1];
                    Object(a.useEffect)(
                        function () {
                            j(s(i));
                        },
                        [n]
                    ),
                        Object(a.useEffect)(
                            function () {
                                c && b(!!c);
                            },
                            [c]
                        );
                    var N = {
                        requirementsErrorTitle:
                            c && c.message
                                ? i(c.message)
                                : i("form.password_check_requirements"),
                    };
                    return Object(gr.jsx)(
                        _r.Password,
                        Object(E.a)(
                            Object(E.a)({}, o),
                            {},
                            {
                                id: t,
                                error: d,
                                onChange: function (e) {
                                    !w && k(!0),
                                        r(e),
                                        (function (e) {
                                            var t = Object(Yr.a)(f),
                                                r = Object(xr.a)(t, 2),
                                                n = r[0],
                                                a = r[1],
                                                c = Object(xr.a)(
                                                    a.requirements,
                                                    4
                                                ),
                                                s = c[0],
                                                o = c[1],
                                                i = c[2],
                                                u = c[3],
                                                l = qt(e),
                                                d = l.hasMinLength,
                                                p = l.hasLowerCase,
                                                m = l.hasUpperCase,
                                                h = l.hasNumber,
                                                O = l.hasSpecialCharacter,
                                                v = l.policyCriteria,
                                                x = l.isValidPassword;
                                            (n.status = d ? Wr : Qr),
                                                (s.status = m ? Wr : Qr),
                                                (o.status = p ? Wr : Qr),
                                                (i.status = h ? Wr : Qr),
                                                (u.status = O ? Wr : Qr),
                                                (a.status = v ? Wr : Qr),
                                                b(!x),
                                                j(t);
                                        })(e);
                                },
                                onFocus: function () {
                                    return x(!1);
                                },
                                onBlur: function () {
                                    if ((x(!0), w)) {
                                        var e = f.some(function (e) {
                                            return e.status !== Wr;
                                        });
                                        b(e);
                                    }
                                },
                                requirements: f,
                                hideRequirements: v,
                                i18n: N,
                                maxLength: 200,
                            }
                        )
                    );
                };
            $r.defaultProps = {
                error: null,
                getRequirements: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : function () {
                                  return "";
                              };
                    return [
                        {
                            id: 0,
                            label: e("form.password_min_length_required"),
                        },
                        {
                            id: 1,
                            label: e("form.password_multi_required"),
                            requirements: [
                                {
                                    id: 1,
                                    label: e(
                                        "form.password_uppercase_required"
                                    ),
                                },
                                {
                                    id: 1.1,
                                    label: e(
                                        "form.password_lowercase_required"
                                    ),
                                },
                                {
                                    id: 1.2,
                                    label: e("form.password_numeral_required"),
                                },
                                {
                                    id: 1.3,
                                    label: e(
                                        "form.password_special_char_required"
                                    ),
                                },
                            ],
                        },
                    ];
                },
            };
            var Zr = $r,
                Xr = function (e) {
                    var t = e.setStateValues,
                        r = e.values,
                        n = e.setValue,
                        a = e.errors,
                        c = e.clearError,
                        s = e.triggerValidation,
                        o = e.formState.touched;
                    return {
                        onChangeHandler: function (e) {
                            var s =
                                arguments.length > 1 &&
                                void 0 !== arguments[1] &&
                                arguments[1];
                            return function (o) {
                                n(e, "string" === typeof o ? o.trim() : o, s),
                                    t(
                                        Object(E.a)(
                                            Object(E.a)({}, r),
                                            {},
                                            Object(b.a)({}, e, o)
                                        )
                                    ),
                                    a[e] && c(e);
                            };
                        },
                        onBlurHandler: function (e) {
                            return function (t) {
                                o[e] && s(e);
                            };
                        },
                    };
                },
                Jr =
                    (r(1490),
                    function (e) {
                        var t = e.children,
                            r = e.title,
                            n = e.hideTitle,
                            a = Object(Nr.a)().t;
                        return Object(gr.jsxs)("div", {
                            className: "center-layout container",
                            children: [
                                Object(gr.jsx)(Br, {
                                    title: r || a("label.sign_in_header_title"),
                                    hideTitle: n,
                                }),
                                Object(gr.jsx)("div", {
                                    className: "row justify-content-center",
                                    children: Object(gr.jsx)("div", {
                                        className: "col-12",
                                        children: t,
                                    }),
                                }),
                            ],
                        });
                    }),
                en =
                    (r(1491),
                    function () {
                        var e,
                            t = Object(Nr.a)().t,
                            r = Object(l.e)(function (e) {
                                return e;
                            }),
                            n = r.user,
                            a = r.session,
                            c = Object(l.d)(),
                            s = Object(d.f)(),
                            o =
                                n[de] ||
                                !(null === a ||
                                void 0 === a ||
                                null === (e = a.client) ||
                                void 0 === e
                                    ? void 0
                                    : e[ge]),
                            i = null,
                            u = function () {
                                c.user.update(Object(b.a)({}, he, !1)),
                                    s.push(M);
                            };
                        return (
                            o ||
                                (i = Object(gr.jsx)("div", {
                                    className:
                                        "d-flex justify-content-center sign-in-footer",
                                    children: Object(gr.jsx)(Pr, {
                                        id: "sign-up",
                                        onClick: function () {
                                            return u();
                                        },
                                        onKeyDown: function (e) {
                                            "Enter" === e.key &&
                                                (e.preventDefault(), u());
                                        },
                                        children: t("link.sign_up_account"),
                                    }),
                                })),
                            i
                        );
                    }),
                tn =
                    (r(1492),
                    function (e) {
                        var t = e.type,
                            r = e.children,
                            n = e.handleClick,
                            a = Object(Er.a)(e, [
                                "type",
                                "children",
                                "handleClick",
                            ]);
                        return "button" === t
                            ? Object(gr.jsx)(
                                  _r.Button,
                                  Object(E.a)(
                                      Object(E.a)(
                                          {
                                              tabIndex: 0,
                                              id: "back-link",
                                              className: "back-link",
                                              onClick: n,
                                          },
                                          a
                                      ),
                                      {},
                                      { children: r }
                                  )
                              )
                            : Object(gr.jsx)(
                                  Pr,
                                  Object(E.a)(
                                      Object(E.a)(
                                          {
                                              id: "back-link",
                                              className: "back-link",
                                              bold: !0,
                                              onClick: n,
                                          },
                                          a
                                      ),
                                      {},
                                      { children: r }
                                  )
                              );
                    }),
                rn =
                    (r(1493),
                    function (e) {
                        var t = e.children,
                            r = e.className,
                            n =
                                (e.isCenter,
                                Object(Er.a)(e, [
                                    "children",
                                    "className",
                                    "isCenter",
                                ])),
                            a = Cr()("ui-panel", r);
                        return Object(gr.jsx)(
                            _r.Card,
                            Object(E.a)(
                                {
                                    content: Object(gr.jsx)("div", {
                                        className: "ui-panel-content",
                                        children: t,
                                    }),
                                    className: a,
                                    appearance: "dropShadow",
                                },
                                n
                            )
                        );
                    }),
                nn =
                    (r(1494),
                    function () {
                        var e = Object(Nr.a)().t,
                            t = Object(l.d)(),
                            r = {
                                recoveryType: lt,
                                recoveryInput: "",
                                captcha: null,
                            },
                            n = Object(a.useState)(r),
                            c = Object(xr.a)(n, 2),
                            s = c[0],
                            o = c[1],
                            i = Object(a.useState)(
                                "label.recovery_password_tip"
                            ),
                            u = Object(xr.a)(i, 2),
                            d = u[0],
                            b = u[1],
                            p = Object(a.useState)("label.recovery_username"),
                            m = Object(xr.a)(p, 2),
                            f = m[0],
                            j = m[1],
                            h = Object(a.useState)(!1),
                            O = Object(xr.a)(h, 2),
                            v = O[0],
                            x = O[1],
                            _ = Object(Gr.useForm)({ defaultValues: r }),
                            g = _.handleSubmit,
                            w = _.formState,
                            k = _.clearError,
                            S = _.getValues,
                            C = _.register,
                            I = _.errors,
                            P = _.setValue,
                            L = _.setError,
                            R = _.triggerValidation,
                            T = Xr({
                                setStateValues: o,
                                values: s,
                                setValue: P,
                                formState: w,
                                errors: I,
                                clearError: k,
                                triggerValidation: R,
                            }),
                            V = T.onChangeHandler,
                            U = T.onBlurHandler,
                            A = ot.RECOVER_ACCOUNT;
                        Object(a.useEffect)(function () {
                            C({ name: "recoveryType" }),
                                C(
                                    { name: "recoveryInput" },
                                    {
                                        validate: function (e) {
                                            if (
                                                ((e = e && e.trim()),
                                                S().recoveryType === dt)
                                            ) {
                                                if (!(e && e.length > 0))
                                                    return "form.err_email_empty";
                                                if (!Bt(e))
                                                    return "form.err_email_invalid";
                                            }
                                            return (
                                                !!e || "form.err_username_empty"
                                            );
                                        },
                                    }
                                );
                        }, []);
                        var M = (function () {
                                var e = Object(y.a)(
                                    N.a.mark(function e(r) {
                                        var n, a;
                                        return N.a.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            x(!0),
                                                            (n = {
                                                                setLoading: x,
                                                                setError: L,
                                                                recoveryData: r,
                                                            }),
                                                            (a = {
                                                                callback:
                                                                    t.user
                                                                        .handleAccountRecovery,
                                                                submitSelector:
                                                                    A,
                                                                formErrors: I,
                                                                options: n,
                                                            }),
                                                            (e.next = 5),
                                                            t.arkose.handleArkose(
                                                                a
                                                            )
                                                        );
                                                    case 5:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                );
                                return function (t) {
                                    return e.apply(this, arguments);
                                };
                            })(),
                            D = { target: je },
                            H = Object(l.e)(function (e) {
                                return e.user;
                            });
                        return Object(gr.jsxs)(Jr, {
                            title: e("label.recovery_header_title"),
                            children: [
                                Object(gr.jsxs)(rn, {
                                    className: "account-recovery",
                                    children: [
                                        Object(gr.jsx)("p", {
                                            className: "recovery-title",
                                            children: e("label.recovery_title"),
                                        }),
                                        Object(gr.jsxs)("form", {
                                            className: "form-container",
                                            onSubmit: g(M),
                                            children: [
                                                Object(gr.jsxs)(
                                                    _r.RadioButtons,
                                                    {
                                                        name: A,
                                                        value: s.recoveryType,
                                                        onChange: function (
                                                            e,
                                                            t
                                                        ) {
                                                            t !==
                                                                s.recoveryType &&
                                                                (P(
                                                                    "recoveryType",
                                                                    t
                                                                ),
                                                                o(
                                                                    Object(E.a)(
                                                                        Object(
                                                                            E.a
                                                                        )(
                                                                            {},
                                                                            s
                                                                        ),
                                                                        {},
                                                                        {
                                                                            recoveryType:
                                                                                t,
                                                                        }
                                                                    )
                                                                ),
                                                                t === dt
                                                                    ? (b(
                                                                          "label.recovery_username_tip"
                                                                      ),
                                                                      j(
                                                                          "label.recovery_input_placeholder"
                                                                      ))
                                                                    : (b(
                                                                          "label.recovery_password_tip"
                                                                      ),
                                                                      j(
                                                                          "label.recovery_username"
                                                                      )),
                                                                k());
                                                        },
                                                        children: [
                                                            Object(gr.jsx)(
                                                                _r.RadioButton,
                                                                {
                                                                    id: "password-recovery",
                                                                    value: "".concat(
                                                                        lt
                                                                    ),
                                                                    label: e(
                                                                        "label.recovery_password"
                                                                    ),
                                                                }
                                                            ),
                                                            Object(gr.jsx)(
                                                                _r.RadioButton,
                                                                {
                                                                    id: "username-recovery",
                                                                    value: "".concat(
                                                                        dt
                                                                    ),
                                                                    label: e(
                                                                        "label.recovery_username"
                                                                    ),
                                                                }
                                                            ),
                                                        ],
                                                    }
                                                ),
                                                Object(gr.jsx)("div", {
                                                    className: "recovery-tip",
                                                    children: e(d),
                                                }),
                                                Object(gr.jsx)(_r.TextBox, {
                                                    id: "recoveryInput",
                                                    name: "recoveryInput",
                                                    className: "form-control",
                                                    error: !!I.recoveryInput,
                                                    helperText:
                                                        I.recoveryInput &&
                                                        e(
                                                            I.recoveryInput
                                                                .message
                                                        ),
                                                    value: s.recoveryInput,
                                                    onChange:
                                                        V("recoveryInput"),
                                                    onBlur: U("recoveryInput"),
                                                    placeholder: e(f),
                                                    autoCapitalize: "none",
                                                    autoComplete: "off",
                                                    autoFocus: !0,
                                                    maxLength: 256,
                                                }),
                                                Object(gr.jsx)("div", {
                                                    className: "next-btn",
                                                    children: Object(gr.jsx)(
                                                        _r.Button,
                                                        {
                                                            id: A,
                                                            name: A,
                                                            type: "submit",
                                                            loading: v,
                                                            expanded: !0,
                                                            children:
                                                                e(
                                                                    "button.next"
                                                                ),
                                                        }
                                                    ),
                                                }),
                                                Object(gr.jsx)("div", {
                                                    className:
                                                        "d-flex justify-content-center",
                                                    children: Object(gr.jsx)(
                                                        tn,
                                                        {
                                                            onClick:
                                                                function () {
                                                                    return t.user.handleBackLink(
                                                                        D
                                                                    );
                                                                },
                                                            children: e(
                                                                Kt(D, H)
                                                                    ? "link.not_now"
                                                                    : "link.back_link"
                                                            ),
                                                        }
                                                    ),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                Object(gr.jsx)("div", {
                                    className: "d-flex justify-content-center",
                                    children: Object(gr.jsx)(en, {}),
                                }),
                            ],
                        });
                    }),
                an =
                    (r(1495),
                    function () {
                        var e = Object(Nr.a)().t,
                            t = Object(l.d)(),
                            r = Object(d.f)(),
                            n = Object(l.e)(function (e) {
                                return e;
                            }),
                            c = n.user,
                            s = n.loading,
                            o = Object(a.useState)(c.username),
                            i = Object(xr.a)(o, 2),
                            u = i[0],
                            b = i[1],
                            p = Object(a.useState)({
                                newPassword: "",
                                confirmNewPassword: "",
                            }),
                            m = Object(xr.a)(p, 2),
                            f = m[0],
                            j = m[1],
                            h = Object(Gr.useForm)({ defaultValues: f }),
                            O = h.register,
                            v = h.handleSubmit,
                            x = h.clearError,
                            _ = h.errors,
                            g = h.formState,
                            w = h.setError,
                            k = h.getValues,
                            E = h.setValue,
                            S = h.triggerValidation,
                            C = Xr({
                                setStateValues: j,
                                values: f,
                                setValue: E,
                                formState: g,
                                errors: _,
                                clearError: x,
                                triggerValidation: S,
                            }),
                            I = C.onChangeHandler,
                            P = C.onBlurHandler;
                        Object(a.useEffect)(function () {
                            c.password || r.replace(R);
                        }, []),
                            Object(a.useEffect)(function () {
                                O(
                                    { name: "newPassword" },
                                    {
                                        required:
                                            "form.err_password_reset_empty",
                                    }
                                ),
                                    O(
                                        { name: "confirmNewPassword" },
                                        {
                                            required:
                                                "form.err_confirm_password_empty",
                                            validate: function (e) {
                                                if (e && e !== k().newPassword)
                                                    return "form.err_confirm_password_not_match";
                                            },
                                        }
                                    );
                            }, []),
                            Object(a.useEffect)(
                                function () {
                                    var e = Object(Ht.a)(c.username);
                                    e && b(e.formatInternational());
                                },
                                [c.username]
                            );
                        var L = (function () {
                            var e = Object(y.a)(
                                N.a.mark(function e(n) {
                                    var a, s, o;
                                    return N.a.wrap(
                                        function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            (e.prev = 0),
                                                            (e.next = 3),
                                                            t.user.changePassword(
                                                                {
                                                                    password:
                                                                        c.password,
                                                                    newPassword:
                                                                        n.newPassword,
                                                                }
                                                            )
                                                        );
                                                    case 3:
                                                        if (
                                                            (a = e.sent)
                                                                .status !== Ee
                                                        ) {
                                                            e.next = 8;
                                                            break;
                                                        }
                                                        r.push(q, { page: V }),
                                                            (e.next = 10);
                                                        break;
                                                    case 8:
                                                        return (
                                                            (e.next = 10),
                                                            t.user.userCheckFlowURI(
                                                                a
                                                            )
                                                        );
                                                    case 10:
                                                        e.next = 25;
                                                        break;
                                                    case 12:
                                                        (e.prev = 12),
                                                            (e.t0 = e.catch(0)),
                                                            (s =
                                                                e.t0.response
                                                                    .data),
                                                            (e.t1 = s.error),
                                                            (e.next =
                                                                e.t1 === Se
                                                                    ? 18
                                                                    : e.t1 ===
                                                                      Me
                                                                    ? 20
                                                                    : 23);
                                                        break;
                                                    case 18:
                                                        return (
                                                            w(
                                                                "newPassword",
                                                                "server",
                                                                "form.err_password_incorrect"
                                                            ),
                                                            e.abrupt(
                                                                "break",
                                                                25
                                                            )
                                                        );
                                                    case 20:
                                                        return (
                                                            (o = Gt(
                                                                s.passwordRequirements
                                                            )),
                                                            w(
                                                                "newPassword",
                                                                "server",
                                                                o === Ye
                                                                    ? "form.err_password_invalid"
                                                                    : "form.err_password_complexity"
                                                            ),
                                                            e.abrupt(
                                                                "break",
                                                                25
                                                            )
                                                        );
                                                    case 23:
                                                        return (
                                                            console.error(
                                                                "Unknown error:",
                                                                s
                                                            ),
                                                            e.abrupt(
                                                                "break",
                                                                25
                                                            )
                                                        );
                                                    case 25:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        null,
                                        [[0, 12]]
                                    );
                                })
                            );
                            return function (t) {
                                return e.apply(this, arguments);
                            };
                        })();
                        return Object(gr.jsx)(Jr, {
                            title: e("label.change_password_header_title"),
                            children: Object(gr.jsxs)(rn, {
                                className: "change-password",
                                children: [
                                    Object(gr.jsx)("p", {
                                        children: e(
                                            "label.change_password_title"
                                        ),
                                    }),
                                    Object(gr.jsx)("h5", {
                                        className: "username text-wrapper",
                                        children: u,
                                    }),
                                    Object(gr.jsxs)("form", {
                                        className: "form-container",
                                        onSubmit: v(L),
                                        children: [
                                            Object(gr.jsx)(Zr, {
                                                id: "newPassword",
                                                name: "newPassword",
                                                className:
                                                    "form-control-ui-password",
                                                placeholder: e(
                                                    "label.placeholder_new_password"
                                                ),
                                                value: f.newPassword,
                                                error: _.newPassword,
                                                locale: c.locale,
                                                onChange: I("newPassword"),
                                                autoFocus: !0,
                                            }),
                                            Object(gr.jsx)(_r.Password, {
                                                id: "confirmNewPassword",
                                                name: "confirmNewPassword",
                                                className: "form-control",
                                                value: f.confirmNewPassword,
                                                onChange:
                                                    I("confirmNewPassword"),
                                                onBlur: P("confirmNewPassword"),
                                                placeholder: e(
                                                    "label.placeholder_confirm_new_password"
                                                ),
                                                error: !!_.confirmNewPassword,
                                                helperText:
                                                    _.confirmNewPassword &&
                                                    e(
                                                        _.confirmNewPassword
                                                            .message
                                                    ),
                                                maxLength: 200,
                                            }),
                                            Object(gr.jsx)(_r.Button, {
                                                id: "sign-in",
                                                name: "sign-in",
                                                type: "submit",
                                                loading:
                                                    s.effects.user
                                                        .changePassword,
                                                expanded: !0,
                                                children: e("button.save"),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        });
                    }),
                cn = function (e) {
                    var t = e.multicolor,
                        r = e.size,
                        n = void 0 === r ? 25 : r,
                        a = Object(gr.jsxs)("g", {
                            id: "google-multicolor",
                            children: [
                                Object(gr.jsx)("path", {
                                    fill: "#3E82F1",
                                    d: "M31.7,16c0-1-0.1-2-0.3-3h-1.2h-4.8h-9V19h9.1c-0.6,2.1-1.8,3.9-3.5,5.1l4.7,3.7C29.8,25,31.7,20.7,31.7,16z",
                                }),
                                Object(gr.jsx)("path", {
                                    fill: "#E74133",
                                    d: "M16.5,6.5c2.3,0,4.4,0.8,6,2.2l4.4-4.4C24.1,1.6,20.4,0,16.3,0C10.2,0,4.7,3.6,2,8.9l5.4,4.1C8.8,9.2,12.4,6.5,16.5,6.5z",
                                }),
                                Object(gr.jsx)("path", {
                                    fill: "#F9BB00",
                                    d: "M2.1,23.3l5.2-4.1c-0.3-0.9-0.5-2-0.5-3c0-1.2,0.2-2.3,0.6-3.3L2,8.9C0.9,11,0.3,13.4,0.3,16C0.3,18.6,1,21.1,2.1,23.3z",
                                }),
                                Object(gr.jsx)("path", {
                                    fill: "#32A753",
                                    d: "M7.3,19.2l-5.2,4.1c2.7,5.1,8.1,8.7,14.2,8.7c4,0,7.6-1.6,10.3-4.1l-4.7-3.7c-1.5,1.1-3.4,1.8-5.4,1.8C12.3,25.9,8.6,23.1,7.3,19.2z",
                                }),
                            ],
                        }),
                        c = Object(gr.jsx)("g", {
                            id: "google",
                            children: Object(gr.jsx)("path", {
                                d: "M31.4,13h-1.2h-4.8h-9V19h9.1c-0.6,2.1-1.8,3.9-3.5,5.1c-1.5,1.1-3.4,1.8-5.4,1.8c-4.2,0-7.9-2.8-9.2-6.7 c-0.3-0.9-0.5-2-0.5-3c0-1.2,0.2-2.3,0.6-3.3c1.4-3.8,5-6.5,9.1-6.5c2.3,0,4.4,0.8,6,2.2l4.4-4.4C24.1,1.6,20.4,0,16.3,0 C10.2,0,4.7,3.6,2,8.9C0.9,11,0.3,13.4,0.3,16c0,2.6,0.7,5.1,1.8,7.3c2.7,5.1,8.1,8.7,14.2,8.7c4,0,7.6-1.6,10.3-4.1 c3.1-2.9,5-7.2,5-11.9C31.7,15,31.6,14,31.4,13z",
                            }),
                        });
                    return Object(gr.jsx)("svg", {
                        width: n,
                        height: n,
                        viewBox: "0 0 32 32",
                        fill: t ? "none" : "currentColor",
                        children: Object(gr.jsx)("svg", {
                            focusable: "false",
                            version: "1.1",
                            children: t ? a : c,
                        }),
                    });
                };
            cn.displayName = "UIIconGoogle";
            var sn = cn,
                on = function (e) {
                    var t = e.multicolor,
                        r = e.size,
                        n = void 0 === r ? 25 : r,
                        a = Object(gr.jsxs)("g", {
                            id: "facebook-multicolor",
                            children: [
                                Object(gr.jsx)("path", {
                                    style: { fill: "#4267B2" },
                                    d: "M30.2,0H1.8C0.8,0,0,0.8,0,1.8v28.5c0,1,0.8,1.8,1.8,1.8h15.3V19.6h-4.2v-4.8h4.2v-3.6c0-4.1,2.5-6.4,6.2-6.4 C25.1,4.8,26.6,5,27,5v4.3h-2.5c-2,0-2.4,1-2.4,2.4v3.1h4.8l-0.6,4.8h-4.2V32h8.1c1,0,1.8-0.8,1.8-1.8v0V1.8C32,0.8,31.2,0,30.2,0z",
                                }),
                                Object(gr.jsx)("path", {
                                    style: { fill: "#FFFFFF" },
                                    d: "M22.1,32V19.6h4.2l0.6-4.8h-4.8v-3.1c0-1.4,0.4-2.4,2.4-2.4H27V5c-0.4-0.1-2-0.2-3.7-0.2 c-3.7,0-6.2,2.2-6.2,6.4v3.6h-4.2v4.8h4.2V32H22.1z",
                                }),
                            ],
                        }),
                        c = Object(gr.jsx)("g", {
                            id: "facebook",
                            children: Object(gr.jsx)("path", {
                                d: "M30.2,0H1.8C0.8,0,0,0.8,0,1.8v28.5c0,1,0.8,1.8,1.8,1.8h15.3V19.6h-4.2v-4.8h4.2v-3.6 c0-4.1,2.5-6.4,6.2-6.4C25.1,4.8,26.6,5,27,5v4.3h-2.5c-2,0-2.4,1-2.4,2.4v3.1h4.8l-0.6,4.8h-4.2V32h8.1c1,0,1.8-0.8,1.8-1.8v0V1.8 C32,0.8,31.2,0,30.2,0z",
                            }),
                        });
                    return Object(gr.jsx)("svg", {
                        width: n,
                        height: n,
                        viewBox: "0 0 32 32",
                        fill: t ? "none" : "currentColor",
                        children: Object(gr.jsx)("svg", {
                            focusable: "false",
                            version: "1.1",
                            viewBox: "0 0 32 32",
                            children: t ? a : c,
                        }),
                    });
                };
            on.displayName = "UIIconFacebook";
            var un = on,
                ln = function (e) {
                    var t = e.multicolor,
                        r = e.size,
                        n = void 0 === r ? 25 : r,
                        a = Object(gr.jsxs)("g", {
                            id: "wechat-multicolor",
                            children: [
                                Object(gr.jsx)("path", {
                                    style: {
                                        overflow: "visible",
                                        fill: "#8FE254",
                                    },
                                    d: "M0,12.8c0,2.9,1.6,5.5,4,7.3c0.2,0.1,0.3,0.4,0.3,0.6c0,0.1,0,0.2,0,0.2c-0.2,0.7-0.5,1.9-0.5,1.9 c0,0.1-0.1,0.2-0.1,0.3c0,0.2,0.2,0.4,0.4,0.4c0.1,0,0.2,0,0.2-0.1L6.8,22c0.2-0.1,0.4-0.2,0.6-0.2c0.1,0,0.2,0,0.3,0.1 c1.2,0.3,2.5,0.5,3.8,0.5c6.4,0,11.6-4.3,11.6-9.7c0-5.3-5.2-9.7-11.6-9.7C5.2,3.1,0,7.4,0,12.8",
                                }),
                                Object(gr.jsx)("path", {
                                    style: {
                                        overflow: "visible",
                                        fill: "#E9EBEC",
                                    },
                                    d: "M12.7,19.9c0,4.4,4.3,8,9.7,8c1.1,0,2.2-0.2,3.2-0.4c0.1,0,0.2,0,0.3,0c0.2,0,0.4,0.1,0.5,0.1l2.1,1.2 c0.1,0,0.1,0.1,0.2,0.1c0.2,0,0.3-0.1,0.3-0.3c0-0.1,0-0.2-0.1-0.2c0,0-0.3-1-0.4-1.6c0-0.1,0-0.1,0-0.2c0-0.2,0.1-0.4,0.3-0.5 c2-1.5,3.3-3.7,3.3-6.1c0-4.4-4.3-8-9.7-8C17,11.9,12.7,15.5,12.7,19.9",
                                }),
                                Object(gr.jsx)("path", {
                                    style: { fill: "#126F21" },
                                    d: "M9.3,9.6c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.5-0.7-1.5-1.6c0-0.9,0.7-1.5,1.5-1.5 C8.6,8.1,9.3,8.8,9.3,9.6",
                                }),
                                Object(gr.jsx)("path", {
                                    style: { fill: "#126F21" },
                                    d: "M17,9.6c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6c0-0.9,0.7-1.5,1.6-1.5 C16.3,8.1,17,8.8,17,9.6",
                                }),
                                Object(gr.jsx)("path", {
                                    style: { fill: "#7B7F7F" },
                                    d: "M24.4,17.5c0,0.7,0.6,1.3,1.3,1.3c0.7,0,1.3-0.6,1.3-1.3c0-0.7-0.6-1.3-1.3-1.3 C25,16.2,24.4,16.8,24.4,17.5",
                                }),
                                Object(gr.jsx)("path", {
                                    style: { fill: "#7B7F7F" },
                                    d: "M17.9,17.5c0,0.7,0.6,1.3,1.3,1.3c0.7,0,1.3-0.6,1.3-1.3c0-0.7-0.6-1.3-1.3-1.3 C18.5,16.2,17.9,16.8,17.9,17.5",
                                }),
                            ],
                        }),
                        c = Object(gr.jsx)("g", {
                            id: "wechat",
                            children: Object(gr.jsx)("path", {
                                d: "M15.4,11.2c-0.9,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5S17,8.8,17,9.6S16.3,11.2,15.4,11.2 M7.7,11.2c-0.9,0-1.5-0.7-1.5-1.5 s0.7-1.5,1.5-1.5c0.9,0,1.5,0.7,1.5,1.5S8.6,11.2,7.7,11.2 M11.6,3.1C5.2,3.1,0,7.4,0,12.7c0,2.9,1.6,5.5,4,7.3 c0.2,0.1,0.3,0.4,0.3,0.6c0,0.1,0,0.2,0,0.2c-0.2,0.7-0.5,1.9-0.5,1.9c0,0.1-0.1,0.2-0.1,0.3c0,0.2,0.2,0.4,0.4,0.4 c0.1,0,0.2,0,0.2-0.1l2.5-1.5c0.2-0.1,0.4-0.2,0.6-0.2c0.1,0,0.2,0,0.3,0.1c1.2,0.3,2.5,0.5,3.8,0.5c0.2,0,0.4,0,0.6,0 c-0.3-0.8-0.4-1.5-0.4-2.4c0-4.9,4.7-8.8,10.5-8.8c0.2,0,0.4,0,0.6,0C22.1,6.6,17.3,3.1,11.6,3.1 M25.6,18.7c-0.7,0-1.3-0.6-1.3-1.3 c0-0.7,0.6-1.3,1.3-1.3c0.7,0,1.3,0.6,1.3,1.3C26.9,18.1,26.3,18.7,25.6,18.7 M19.1,18.7c-0.7,0-1.3-0.6-1.3-1.3 c0-0.7,0.6-1.3,1.3-1.3c0.7,0,1.3,0.6,1.3,1.3C20.4,18.1,19.9,18.7,19.1,18.7 M28.7,26c2-1.5,3.3-3.7,3.3-6.1c0-4.4-4.3-8-9.6-8 s-9.6,3.6-9.6,8c0,4.4,4.3,8,9.6,8c1.1,0,2.2-0.2,3.1-0.4c0.1,0,0.2,0,0.3,0c0.2,0,0.4,0.1,0.5,0.1l2.1,1.2c0.1,0,0.1,0.1,0.2,0.1 c0.2,0,0.3-0.1,0.3-0.3c0-0.1,0-0.2-0.1-0.2c0,0-0.3-1-0.4-1.6c0-0.1,0-0.1,0-0.2C28.4,26.3,28.5,26.1,28.7,26",
                            }),
                        });
                    return Object(gr.jsx)("svg", {
                        width: n,
                        height: n,
                        viewBox: "0 0 32 32",
                        fill: t ? "none" : "currentColor",
                        children: Object(gr.jsx)("svg", {
                            focusable: "false",
                            version: "1.1",
                            children: t ? a : c,
                        }),
                    });
                };
            ln.displayName = "UIIconWechat";
            var dn = ln,
                bn = function (e) {
                    var t = e.multicolor,
                        r = e.size,
                        n = void 0 === r ? 25 : r,
                        a = Object(gr.jsx)("g", {
                            id: "azure-ad-multicolor",
                            children: Object(gr.jsx)("path", {
                                style: { fill: "#0078D7" },
                                d: "M16,0l-16,19l15.9,13l16-12.9L16,0z M24.5,21c-0.7,0-1.3-0.3-1.8-0.8l-4.4,3.1 c0.3,0.4,0.4,0.9,0.4,1.4c0,1.4-1.2,2.5-2.5,2.5c-1.4,0-2.5-1.1-2.5-2.5c0-0.6,0.2-1.2,0.6-1.7l-5.1-2.7C8.8,20.8,8.2,21,7.6,21 c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.2-2.5,2.5-2.5c0.4,0,0.8,0.1,1.2,0.3l5.3-4.9c-0.4-0.5-0.6-1.1-0.6-1.7c0-1.6,1.3-2.8,2.9-2.8 s2.9,1.3,2.9,2.8c0,0.6-0.2,1-0.5,1.5l4.5,5.3c0.4-0.3,1-0.5,1.5-0.5c1.4,0,2.5,1.1,2.5,2.5C27,19.8,25.8,21,24.5,21z M15.4,12.9 v9.6l-5.5-3.3C10,19,10,18.7,10,18.5c0-0.4-0.2-0.9-0.4-1.3l5.3-4.9C15,12.3,15.3,12.9,15.4,12.9z M17.6,12.2c-0.1,0.1-1,0.7-1,0.8 v9.5L22,19c-0.1-0.2-0.2-0.4-0.2-0.6c0-0.3,0.1-0.6,0.2-1L17.6,12.2z",
                            }),
                        }),
                        c = Object(gr.jsx)("g", {
                            id: "azure",
                            children: Object(gr.jsx)("path", {
                                d: "M16,0l-16,19l15.9,13l16-12.9L16,0z M24.5,21c-0.7,0-1.3-0.3-1.8-0.8l-4.4,3.1c0.3,0.4,0.4,0.9,0.4,1.4 c0,1.4-1.2,2.5-2.5,2.5c-1.4,0-2.5-1.1-2.5-2.5c0-0.6,0.2-1.2,0.6-1.7l-5.1-2.7C8.8,20.8,8.2,21,7.6,21c-1.4,0-2.5-1.1-2.5-2.5 c0-1.4,1.2-2.5,2.5-2.5c0.4,0,0.8,0.1,1.2,0.3l5.3-4.9c-0.4-0.5-0.6-1.1-0.6-1.7c0-1.6,1.3-2.8,2.9-2.8s2.9,1.3,2.9,2.8 c0,0.6-0.2,1-0.5,1.5l4.5,5.3c0.4-0.3,1-0.5,1.5-0.5c1.4,0,2.5,1.1,2.5,2.5C27,19.8,25.8,21,24.5,21z M15.4,12.9v9.6l-5.5-3.3 C10,19,10,18.7,10,18.5c0-0.4-0.2-0.9-0.4-1.3l5.3-4.9C15,12.3,15.3,12.9,15.4,12.9z M17.6,12.2c-0.1,0.1-1,0.7-1,0.8v9.5L22,19 c-0.1-0.2-0.2-0.4-0.2-0.6c0-0.3,0.1-0.6,0.2-1L17.6,12.2z",
                            }),
                        });
                    return Object(gr.jsx)("svg", {
                        width: n,
                        height: n,
                        viewBox: "0 0 32 32",
                        fill: t ? "none" : "currentColor",
                        children: Object(gr.jsx)("svg", {
                            focusable: "false",
                            version: "1.1",
                            viewBox: "0 0 32 32",
                            children: t ? a : c,
                        }),
                    });
                };
            bn.displayName = "UIIconAzure";
            var pn = bn,
                mn = function (e) {
                    var t = e.multicolor,
                        r = e.size,
                        n = void 0 === r ? 25 : r,
                        a = Object(gr.jsxs)("g", {
                            id: "microsoft-multicolor",
                            children: [
                                Object(gr.jsx)("path", {
                                    style: { fill: "#F25022" },
                                    d: "M0,0h15.2c0,5.1,0,10.1,0,15.2c-5.1,0-10.1,0-15.2,0V0L0,0z",
                                }),
                                Object(gr.jsx)("path", {
                                    style: { fill: "#80BA01" },
                                    d: "M16.8,0H32c0,5.1,0,10.1,0,15.2c-5.1,0-10.1,0-15.2,0C16.8,10.1,16.8,5.1,16.8,0L16.8,0z",
                                }),
                                Object(gr.jsx)("path", {
                                    style: { fill: "#02A4EF" },
                                    d: "M0,16.8c5.1,0,10.1,0,15.2,0c0,5.1,0,10.1,0,15.2H0V16.8L0,16.8z",
                                }),
                                Object(gr.jsx)("path", {
                                    style: { fill: "#FFB902" },
                                    d: "M16.8,16.8c5.1,0,10.1,0,15.2,0c0,5.1,0,10.1,0,15.2H16.8C16.8,26.9,16.8,21.9,16.8,16.8L16.8,16.8z",
                                }),
                            ],
                        }),
                        c = Object(gr.jsx)("g", {
                            id: "microsoft",
                            children: Object(gr.jsx)("path", {
                                d: "M0,0h15.2c0,5.1,0,10.1,0,15.2c-5.1,0-10.1,0-15.2,0V0L0,0z M16.8,0c0,5.1,0,10.1,0,15.2 c5.1,0,10.1,0,15.2,0c0-5.1,0-10.1,0-15.2H16.8L16.8,0z M0,16.8V32h15.2c0-5.1,0-10.1,0-15.2C10.1,16.8,5.1,16.8,0,16.8L0,16.8z M16.8,16.8c0,5.1,0,10.1,0,15.2H32c0-5.1,0-10.1,0-15.2C26.9,16.8,21.9,16.8,16.8,16.8L16.8,16.8z",
                            }),
                        });
                    return Object(gr.jsx)("svg", {
                        width: n,
                        height: n,
                        viewBox: "0 0 32 32",
                        fill: t ? "none" : "currentColor",
                        children: Object(gr.jsx)("svg", {
                            focusable: "false",
                            version: "1.1",
                            viewBox: "0 0 32 32",
                            children: t ? a : c,
                        }),
                    });
                };
            mn.displayName = "UIIconMicrosoft";
            var fn = mn,
                jn =
                    (r(1496),
                    {
                        google: sn,
                        facebook: un,
                        azure: pn,
                        wechat: dn,
                        microsoft: fn,
                        hp: _r.LogoHp,
                        user: _r.IconPerson,
                        msp: _r.IconBuilding,
                    }),
                hn = function () {
                    var e = Object(Nr.a)().t,
                        t = Object(d.f)(),
                        r = Object(l.d)(),
                        n = Object(l.e)(function (e) {
                            return e.user;
                        }),
                        c = Object(a.useState)(n.username),
                        s = Object(xr.a)(c, 2),
                        o = s[0],
                        i = s[1],
                        u = function (e) {
                            return Object(y.a)(
                                N.a.mark(function n() {
                                    return N.a.wrap(
                                        function (n) {
                                            for (;;)
                                                switch ((n.prev = n.next)) {
                                                    case 0:
                                                        if (
                                                            e.identityProvider !==
                                                            We
                                                        ) {
                                                            n.next = 4;
                                                            break;
                                                        }
                                                        t.push(T),
                                                            (n.next = 12);
                                                        break;
                                                    case 4:
                                                        return (
                                                            (n.prev = 4),
                                                            (n.next = 7),
                                                            r.user.initFederated(
                                                                e.name
                                                            )
                                                        );
                                                    case 7:
                                                        n.next = 12;
                                                        break;
                                                    case 9:
                                                        (n.prev = 9),
                                                            (n.t0 = n.catch(4)),
                                                            console.error(n.t0);
                                                    case 12:
                                                    case "end":
                                                        return n.stop();
                                                }
                                        },
                                        n,
                                        null,
                                        [[4, 9]]
                                    );
                                })
                            );
                        },
                        b = { target: fe };
                    return (
                        Object(a.useEffect)(
                            function () {
                                var e = Object(Ht.a)(n.username);
                                e && i(e.formatInternational());
                            },
                            [n.username]
                        ),
                        Object(gr.jsx)(Jr, {
                            children: Object(gr.jsxs)(rn, {
                                className: "check-username-panel",
                                children: [
                                    Object(gr.jsx)("div", {
                                        children: Object(gr.jsx)("p", {
                                            children: e("label.username_desc"),
                                        }),
                                    }),
                                    Object(gr.jsxs)("div", {
                                        className: "check-content",
                                        children: [
                                            n.identities.map(function (t) {
                                                var r = jn[t.icon],
                                                    n = {
                                                        multicolor:
                                                            t.multicolor,
                                                        color: t.multicolor
                                                            ? void 0
                                                            : "colorHpBlue6",
                                                        appearance: t.multicolor
                                                            ? "multicolor"
                                                            : void 0,
                                                        size: 48,
                                                    };
                                                return Object(gr.jsxs)(
                                                    "div",
                                                    {
                                                        className:
                                                            "identity-item",
                                                        id: t.identityProvider,
                                                        onClick: u(t),
                                                        children: [
                                                            Object(gr.jsx)(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "identity-icon",
                                                                    children:
                                                                        Object(
                                                                            gr.jsx
                                                                        )(
                                                                            r,
                                                                            Object(
                                                                                E.a
                                                                            )(
                                                                                {},
                                                                                n
                                                                            )
                                                                        ),
                                                                }
                                                            ),
                                                            Object(gr.jsxs)(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "identity-desc",
                                                                    children: [
                                                                        Object(
                                                                            gr.jsx
                                                                        )(
                                                                            "h6",
                                                                            {
                                                                                children:
                                                                                    e(
                                                                                        "label.accounts_".concat(
                                                                                            t.identityProvider,
                                                                                            "_title"
                                                                                        )
                                                                                    ),
                                                                            }
                                                                        ),
                                                                        Object(
                                                                            gr.jsx
                                                                        )(
                                                                            "div",
                                                                            {
                                                                                children:
                                                                                    e(
                                                                                        "label.accounts_".concat(
                                                                                            t.identityProvider,
                                                                                            "_subtitle"
                                                                                        )
                                                                                    ),
                                                                            }
                                                                        ),
                                                                        Object(
                                                                            gr.jsx
                                                                        )(
                                                                            "div",
                                                                            {
                                                                                children:
                                                                                    o,
                                                                            }
                                                                        ),
                                                                    ],
                                                                }
                                                            ),
                                                        ],
                                                    },
                                                    t.name
                                                );
                                            }),
                                            Object(gr.jsx)("div", {
                                                className:
                                                    "d-flex justify-content-center",
                                                children: Object(gr.jsx)(tn, {
                                                    type: "button",
                                                    onClick: function () {
                                                        return r.user.handleBackLink();
                                                    },
                                                    expanded: !0,
                                                    children: e(
                                                        Kt(b, n)
                                                            ? "link.not_now"
                                                            : "link.back_link"
                                                    ),
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        })
                    );
                },
                On =
                    (r(1497),
                    function () {
                        var e = Object(Nr.a)().t,
                            t = Object(l.d)(),
                            r = Object(d.f)(),
                            n = Object(l.e)(function (e) {
                                return e.session;
                            }),
                            c = Object(l.e)(function (e) {
                                return e.loading.effects.session.getConsent;
                            }),
                            s = Object(a.useState)(!1),
                            o = Object(xr.a)(s, 2),
                            i = o[0],
                            u = o[1],
                            b = n && n.sessionIdentityResource,
                            p = function () {
                                var e = [];
                                return (
                                    n &&
                                        n.scopes &&
                                        n.scopes.forEach(function (t) {
                                            t.optional &&
                                                -1 === e.indexOf(t.name) &&
                                                e.push(t.name);
                                        }),
                                    e
                                );
                            },
                            m = Object(a.useState)(p()),
                            f = Object(xr.a)(m, 2),
                            j = f[0],
                            h = f[1],
                            O = n.client && n.client.displayName,
                            v = function (t) {
                                var r = t;
                                switch (t) {
                                    case "email":
                                        r = e("label.consent_email");
                                        break;
                                    case "openid":
                                        r = e("label.consent_openid");
                                        break;
                                    case "profile":
                                        r = e("label.consent_profile_basic");
                                        break;
                                    case "user.profile.read":
                                        r = e("label.consent_profile_read");
                                        break;
                                    case "user.profile.write":
                                        r = e("label.consent_profile_write");
                                        break;
                                    case "offline_access":
                                        r = e("label.consent_offline_access");
                                        break;
                                    default:
                                        r = t;
                                }
                                return r;
                            },
                            x = (function () {
                                var e = Object(y.a)(
                                    N.a.mark(function e(n) {
                                        var a;
                                        return N.a.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                u(!0),
                                                                (e.prev = 1),
                                                                (e.next = 4),
                                                                t.session.approveConsent(
                                                                    {
                                                                        approved:
                                                                            n,
                                                                        optionalScopes:
                                                                            j,
                                                                    }
                                                                )
                                                            );
                                                        case 4:
                                                            (a = e.sent)
                                                                .nextUrl &&
                                                                r.push(X, {
                                                                    nextUrl:
                                                                        a.nextUrl,
                                                                }),
                                                                (e.next = 12);
                                                            break;
                                                        case 8:
                                                            (e.prev = 8),
                                                                (e.t0 =
                                                                    e.catch(1)),
                                                                u(!1),
                                                                console.error(
                                                                    e.t0
                                                                );
                                                        case 12:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            null,
                                            [[1, 8]]
                                        );
                                    })
                                );
                                return function (t) {
                                    return e.apply(this, arguments);
                                };
                            })();
                        return (
                            Object(a.useEffect)(function () {
                                t.session.getConsent();
                            }, []),
                            Object(a.useEffect)(
                                function () {
                                    h(p());
                                },
                                [n.scopes]
                            ),
                            c
                                ? Object(gr.jsx)(qr, {})
                                : Object(gr.jsx)(Jr, {
                                      title: e("label.consent_title"),
                                      children: Object(gr.jsxs)(rn, {
                                          className: "consent-panel",
                                          children: [
                                              Object(gr.jsx)("p", {
                                                  children: e(
                                                      "label.password_hello"
                                                  ),
                                              }),
                                              Object(gr.jsx)("h5", {
                                                  className: "text-wrapper",
                                                  children: b.userName,
                                              }),
                                              Object(gr.jsxs)("div", {
                                                  className: "sub-title",
                                                  children: [
                                                      Object(gr.jsx)(yr.a, {
                                                          i18nKey:
                                                              "label.consent_sub_title",
                                                          components: [
                                                              Object(gr.jsx)(
                                                                  "strong",
                                                                  {
                                                                      children:
                                                                          {
                                                                              APPNAME:
                                                                                  O,
                                                                          },
                                                                  },
                                                                  0
                                                              ),
                                                          ],
                                                      }),
                                                      " ",
                                                  ],
                                              }),
                                              Object(gr.jsxs)("form", {
                                                  children: [
                                                      (function () {
                                                          var e = [],
                                                              t =
                                                                  n &&
                                                                  n.scopes &&
                                                                  n.scopes.sort(
                                                                      function (
                                                                          e,
                                                                          t
                                                                      ) {
                                                                          return (
                                                                              e.optional -
                                                                              t.optional
                                                                          );
                                                                      }
                                                                  );
                                                          return (
                                                              t &&
                                                                  t.forEach(
                                                                      function (
                                                                          t
                                                                      ) {
                                                                          e.push(
                                                                              Object(
                                                                                  gr.jsx
                                                                              )(
                                                                                  "div",
                                                                                  {
                                                                                      className:
                                                                                          "consent-item",
                                                                                      children:
                                                                                          Object(
                                                                                              gr.jsx
                                                                                          )(
                                                                                              _r.Checkbox,
                                                                                              {
                                                                                                  id: t.name,
                                                                                                  name: t.name,
                                                                                                  label: v(
                                                                                                      t.name
                                                                                                  ),
                                                                                                  onChange:
                                                                                                      function () {
                                                                                                          return (function (
                                                                                                              e
                                                                                                          ) {
                                                                                                              var t =
                                                                                                                  j.indexOf(
                                                                                                                      e
                                                                                                                  );
                                                                                                              -1 !==
                                                                                                              t
                                                                                                                  ? j.splice(
                                                                                                                        t,
                                                                                                                        1
                                                                                                                    )
                                                                                                                  : j.push(
                                                                                                                        e
                                                                                                                    );
                                                                                                          })(
                                                                                                              t.name
                                                                                                          );
                                                                                                      },
                                                                                                  disabled:
                                                                                                      !t.optional,
                                                                                                  checked:
                                                                                                      -1 !==
                                                                                                          j.indexOf(
                                                                                                              t.name
                                                                                                          ) ||
                                                                                                      !t.optional,
                                                                                              }
                                                                                          ),
                                                                                  },
                                                                                  "listItem_".concat(
                                                                                      t.name
                                                                                  )
                                                                              )
                                                                          );
                                                                      }
                                                                  ),
                                                              e
                                                          );
                                                      })(),
                                                      Object(gr.jsxs)("div", {
                                                          className:
                                                              "consent-footer",
                                                          children: [
                                                              Object(gr.jsxs)(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "footer-text",
                                                                      children:
                                                                          [
                                                                              " ",
                                                                              e(
                                                                                  "label.consent_accept",
                                                                                  {
                                                                                      APPNAME:
                                                                                          O,
                                                                                  }
                                                                              ),
                                                                          ],
                                                                  }
                                                              ),
                                                              Object(gr.jsx)(
                                                                  _r.Button,
                                                                  {
                                                                      id: "accept",
                                                                      name: "accept",
                                                                      onClick:
                                                                          function () {
                                                                              return x(
                                                                                  !0
                                                                              );
                                                                          },
                                                                      loading:
                                                                          i,
                                                                      children:
                                                                          e(
                                                                              "button.accept"
                                                                          ),
                                                                  }
                                                              ),
                                                              Object(gr.jsx)(
                                                                  _r.Button,
                                                                  {
                                                                      id: "cancel",
                                                                      name: "cancel",
                                                                      onClick:
                                                                          function () {
                                                                              return x(
                                                                                  !1
                                                                              );
                                                                          },
                                                                      appearance:
                                                                          "secondary",
                                                                      children:
                                                                          e(
                                                                              "button.cancel"
                                                                          ),
                                                                  }
                                                              ),
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                              Object(gr.jsx)("div", {
                                                  className:
                                                      "d-flex justify-content-center",
                                              }),
                                          ],
                                      }),
                                  })
                        );
                    }),
                vn =
                    (r(1498),
                    function () {
                        var e,
                            t,
                            r = Object(Nr.a)().t,
                            n = Object(l.d)(),
                            a = Object(d.f)(),
                            c = Object(l.e)(function (e) {
                                return e;
                            }),
                            s = c.user,
                            o = c.codeVerification,
                            i = rt.VERIFY_BY_EMAIL,
                            u = (function () {
                                var e = Object(y.a)(
                                    N.a.mark(function e() {
                                        var t;
                                        return N.a.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            (t = {
                                                                submitSelector:
                                                                    i,
                                                                type: b.type,
                                                            }),
                                                            (e.next = 3),
                                                            n.codeVerification.sendCode(
                                                                t
                                                            )
                                                        );
                                                    case 3:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                );
                                return function () {
                                    return e.apply(this, arguments);
                                };
                            })(),
                            b = {
                                type: "email",
                                id: rt.SEND_EMAIL,
                                icon: function () {
                                    return Object(gr.jsx)(_r.IconEnvelope, {
                                        size: 72,
                                    });
                                },
                                title: "label.email_send_title",
                                description: "label.email_send_desc",
                                descriptionOptions: { EMAIL: s.email },
                                buttonText: "button.send_email",
                                getSecondOption: function () {
                                    return s.identityProvider &&
                                        s.identityProvider !== $e
                                        ? null
                                        : Object(gr.jsx)("div", {
                                              className:
                                                  "d-flex justify-content-center",
                                              children: Object(gr.jsx)(Pr, {
                                                  bold: !0,
                                                  to: J,
                                                  onClick: function () {
                                                      return a.push(J);
                                                  },
                                                  children:
                                                      r("link.edit_email"),
                                              }),
                                          });
                                },
                            },
                            p = {
                                type: "phone",
                                id: rt.SEND_PHONE,
                                icon: function () {
                                    return Object(gr.jsx)(_r.IconMobile, {
                                        size: 72,
                                    });
                                },
                                title: "label.email_send_title",
                                description: "label.sms_send_desc",
                                descriptionOptions: { PHONE: s.phoneNumber },
                                buttonText: "button.send_sms",
                                getSecondOption: function () {
                                    return Object(gr.jsx)(_r.Button, {
                                        id: i,
                                        name: i,
                                        appearance: "secondary",
                                        loading: o.isLoadingSendEmail,
                                        disabled: o.isLoadingSendSMS,
                                        onClick: u,
                                        expanded: !0,
                                        children: r("button.verify_by_email"),
                                    });
                                },
                            },
                            m =
                                (Object(d.g)().state &&
                                    Object(d.g)().state.context) === Ne
                                    ? p
                                    : b;
                        "email" === m.type
                            ? ((e = o.isLoadingSendEmail),
                              (t = o.isLoadingSendSMS))
                            : ((e = o.isLoadingSendSMS),
                              (t = o.isLoadingSendEmail));
                        var f = (function () {
                            var e = Object(y.a)(
                                N.a.mark(function e() {
                                    var t;
                                    return N.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (t = {
                                                            submitSelector:
                                                                m.id,
                                                            type: m.type,
                                                        }),
                                                        (e.next = 3),
                                                        n.codeVerification.sendCode(
                                                            t
                                                        )
                                                    );
                                                case 3:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function () {
                                return e.apply(this, arguments);
                            };
                        })();
                        return Object(gr.jsx)(Jr, {
                            title: r(m.title),
                            children: Object(gr.jsxs)(rn, {
                                className: "code-send",
                                children: [
                                    Object(gr.jsxs)("div", {
                                        className: "code-desc",
                                        children: [
                                            m.icon(),
                                            Object(gr.jsx)("p", {
                                                children: r(
                                                    m.description,
                                                    m.descriptionOptions
                                                ),
                                            }),
                                        ],
                                    }),
                                    Object(gr.jsx)("div", {
                                        className: "code-send-margin",
                                        children: Object(gr.jsx)(_r.Button, {
                                            id: m.id,
                                            name: m.id,
                                            onClick: f,
                                            loading: e,
                                            disabled: t,
                                            expanded: !0,
                                            children: r(m.buttonText),
                                        }),
                                    }),
                                    Object(gr.jsx)("div", {
                                        className: "code-send-margin",
                                        children: m.getSecondOption(),
                                    }),
                                    Object(gr.jsx)("div", {
                                        className: "hide-notification-button",
                                        children:
                                            o.error &&
                                            Object(gr.jsx)(
                                                _r.InlineNotification,
                                                {
                                                    title: r(o.error),
                                                    type: "negative",
                                                }
                                            ),
                                    }),
                                ],
                            }),
                        });
                    }),
                xn =
                    (r(1499),
                    function () {
                        var e = Object(Nr.a)().t,
                            t = Object(d.f)(),
                            r = Object(l.d)(),
                            n = Object(l.e)(function (e) {
                                return e;
                            }).user,
                            c = Object(l.e)(function (e) {
                                return e.loading.effects.user;
                            }).verifyCode,
                            s = { code: "" },
                            o = Object(a.useState)(s),
                            i = Object(xr.a)(o, 2),
                            u = i[0],
                            b = i[1],
                            p = Object(a.useState)(!1),
                            m = Object(xr.a)(p, 2),
                            f = m[0],
                            j = m[1],
                            h = Object(a.useState)(""),
                            O = Object(xr.a)(h, 2),
                            v = O[0],
                            x = O[1],
                            _ = Object(a.useState)(!0),
                            g = Object(xr.a)(_, 2),
                            w = g[0],
                            k = g[1],
                            S = Object(a.useState)(!1),
                            C = Object(xr.a)(S, 2),
                            I = C[0],
                            P = C[1],
                            L = Object(Gr.useForm)({ defaultValues: s }),
                            R = L.register,
                            T = L.handleSubmit,
                            V = L.formState,
                            U = L.clearError,
                            A = L.errors,
                            M = L.setError,
                            D = L.setValue,
                            B = L.triggerValidation,
                            F = Xr({
                                setStateValues: b,
                                values: u,
                                setValue: D,
                                formState: V,
                                errors: A,
                                clearError: U,
                                triggerValidation: B,
                            }),
                            z = F.onChangeHandler,
                            q = F.onBlurHandler,
                            K = at.SUBMIT_CODE,
                            G = at.RESEND_CODE;
                        Object(a.useEffect)(function () {
                            R(
                                { name: "code" },
                                {
                                    required: "form.err_code_empty",
                                    pattern: {
                                        value: Ot.verificationCodeRegex,
                                        message: "form.err_invalid_email_code",
                                    },
                                }
                            );
                        }, []);
                        var Y = (function () {
                                var e = Object(y.a)(
                                    N.a.mark(function e(n) {
                                        var a, c;
                                        return N.a.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                ((a =
                                                                    n.captcha),
                                                                P(!0),
                                                                a || !f)
                                                            ) {
                                                                e.next = 6;
                                                                break;
                                                            }
                                                            r.arkose.handleArkose(
                                                                {
                                                                    callback: W,
                                                                    submitSelector:
                                                                        K,
                                                                    onHide: function () {
                                                                        return P(
                                                                            !1
                                                                        );
                                                                    },
                                                                    formErrors:
                                                                        A,
                                                                }
                                                            ),
                                                                (e.next = 24);
                                                            break;
                                                        case 6:
                                                            return (
                                                                (e.prev = 6),
                                                                (e.next = 9),
                                                                r.user.verifyCode(
                                                                    n
                                                                )
                                                            );
                                                        case 9:
                                                            if (
                                                                !(c = e.sent)
                                                                    .nextUrl
                                                            ) {
                                                                e.next = 15;
                                                                break;
                                                            }
                                                            Tt.trackEvent(
                                                                ee.EVENTS
                                                                    .HPID_VERIFY_EMAIL_SUCCESS
                                                            ),
                                                                t.push(H, {
                                                                    redirectURL:
                                                                        c.nextUrl,
                                                                }),
                                                                (e.next = 17);
                                                            break;
                                                        case 15:
                                                            return (
                                                                (e.next = 17),
                                                                r.user.userCheckFlowURI(
                                                                    c
                                                                )
                                                            );
                                                        case 17:
                                                            e.next = 24;
                                                            break;
                                                        case 19:
                                                            (e.prev = 19),
                                                                (e.t0 =
                                                                    e.catch(6)),
                                                                P(!1),
                                                                e.t0.response
                                                                    .data
                                                                    .error ===
                                                                Ve
                                                                    ? (Tt.trackEvent(
                                                                          ee
                                                                              .EVENTS
                                                                              .HPID_INVALID_CODE,
                                                                          {
                                                                              formName:
                                                                                  "EMAIL_VERIFICATION",
                                                                          }
                                                                      ),
                                                                      M(
                                                                          "code",
                                                                          "invalidCode",
                                                                          "form.err_invalid_email_code"
                                                                      ))
                                                                    : e.t0
                                                                          .response &&
                                                                      e.t0
                                                                          .response
                                                                          .data
                                                                          .error ===
                                                                          De
                                                                    ? (j(!0),
                                                                      r.arkose.handleArkose(
                                                                          {
                                                                              callback:
                                                                                  W,
                                                                              submitSelector:
                                                                                  K,
                                                                              onHide: function () {
                                                                                  return P(
                                                                                      !1
                                                                                  );
                                                                              },
                                                                              formErrors:
                                                                                  A,
                                                                          }
                                                                      ))
                                                                    : M(
                                                                          "code",
                                                                          "invalidCode",
                                                                          "form.err_invalid_email_code"
                                                                      );
                                                        case 24:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            null,
                                            [[6, 19]]
                                        );
                                    })
                                );
                                return function (t) {
                                    return e.apply(this, arguments);
                                };
                            })(),
                            W = function (e) {
                                var t = { data: e.token, type: it };
                                Y(
                                    Object(E.a)(
                                        Object(E.a)({}, u),
                                        {},
                                        { captcha: t }
                                    )
                                );
                            },
                            Q = (function () {
                                var e = Object(y.a)(
                                    N.a.mark(function e() {
                                        var t, n;
                                        return N.a.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            x(""),
                                                            k(!1),
                                                            (t = {
                                                                setResendEmail:
                                                                    x,
                                                                setShowResend:
                                                                    k,
                                                                setError: M,
                                                            }),
                                                            (n = {
                                                                callback:
                                                                    r
                                                                        .codeVerification
                                                                        .resendEmailCode,
                                                                submitSelector:
                                                                    G,
                                                                onHide: function () {
                                                                    return k(
                                                                        !0
                                                                    );
                                                                },
                                                                options: t,
                                                            }),
                                                            (e.next = 6),
                                                            r.codeVerification.resendEmailCode(
                                                                {
                                                                    options:
                                                                        Object(
                                                                            E.a
                                                                        )(
                                                                            Object(
                                                                                E.a
                                                                            )(
                                                                                {},
                                                                                t
                                                                            ),
                                                                            {},
                                                                            {
                                                                                arkoseParams:
                                                                                    n,
                                                                            }
                                                                        ),
                                                                }
                                                            )
                                                        );
                                                    case 6:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                );
                                return function () {
                                    return e.apply(this, arguments);
                                };
                            })();
                        return Object(gr.jsx)(Jr, {
                            title:
                                n.email === n.username
                                    ? e("label.email_title_edit", {
                                          EMAIL: n.email,
                                      })
                                    : e("label.email_title"),
                            children: Object(gr.jsxs)(rn, {
                                className: "email-verification",
                                children: [
                                    Object(gr.jsxs)("div", {
                                        className: "email-header",
                                        children: [
                                            Object(gr.jsx)(_r.IconEnvelope, {
                                                size: 72,
                                            }),
                                            Object(gr.jsx)("p", {
                                                children:
                                                    n.email === n.username
                                                        ? e(
                                                              "label.email_desc_edit",
                                                              { EMAIL: n.email }
                                                          )
                                                        : e("label.email_desc"),
                                            }),
                                        ],
                                    }),
                                    Object(gr.jsxs)("form", {
                                        className: "form-container",
                                        onSubmit: T(Y),
                                        children: [
                                            Object(gr.jsx)(_r.TextBox, {
                                                id: "code",
                                                name: "code",
                                                className:
                                                    "form-control input-uppercase",
                                                value: u.code,
                                                onChange: z("code"),
                                                onBlur: q("code"),
                                                placeholder: e(
                                                    "label.email_code_placeholder"
                                                ),
                                                error: !!A.code,
                                                helperText:
                                                    A.code && e(A.code.message),
                                                autoCapitalize: "none",
                                                autoComplete: "off",
                                                autoFocus: !0,
                                                maxLength: 256,
                                            }),
                                            Object(gr.jsx)("div", {
                                                className: "margin-default",
                                                children: Object(gr.jsx)(
                                                    _r.Button,
                                                    {
                                                        id: K,
                                                        name: K,
                                                        type: "submit",
                                                        loading: I || c,
                                                        expanded: !0,
                                                        children:
                                                            e("button.verify"),
                                                    }
                                                ),
                                            }),
                                        ],
                                    }),
                                    (!n.identityProvider ||
                                        n.identityProvider === $e) &&
                                        Object(gr.jsx)("div", {
                                            className:
                                                "d-flex justify-content-center",
                                            children: Object(gr.jsx)(Pr, {
                                                bold: !0,
                                                to: J,
                                                onClick: function () {
                                                    return t.push(J);
                                                },
                                                children: e("link.edit_email"),
                                            }),
                                        }),
                                    Object(gr.jsxs)("div", {
                                        className: "request-code",
                                        children: [
                                            Object(gr.jsx)("div", {
                                                className:
                                                    "row justify-content-center margin-default",
                                                children: w
                                                    ? Object(gr.jsx)(Pr, {
                                                          id: G,
                                                          onClick: Q,
                                                          children: e(
                                                              "label.email_resend_code"
                                                          ),
                                                      })
                                                    : Object(gr.jsx)(
                                                          _r.ProgressIndicator,
                                                          {}
                                                      ),
                                            }),
                                            Object(gr.jsx)("div", {
                                                className:
                                                    "hide-notification-button",
                                                children:
                                                    v &&
                                                    Object(gr.jsx)(
                                                        _r.InlineNotification,
                                                        {
                                                            title: e(
                                                                "label.email_resend_to",
                                                                { EMAIL: v }
                                                            ),
                                                            type: "positive",
                                                        }
                                                    ),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        });
                    }),
                _n =
                    (r(1500),
                    function () {
                        var e = Object(d.g)(),
                            t = Object(d.f)(),
                            r = Object(l.e)(function (e) {
                                return e;
                            }).user,
                            n = Object(Nr.a)().t,
                            c = Object(a.useState)(!1),
                            s = Object(xr.a)(c, 2),
                            o = s[0],
                            i = s[1];
                        Object(a.useEffect)(function () {
                            var e = _window.setTimeout(function () {
                                return u();
                            }, 2e3);
                            return function () {
                                e && clearTimeout(e);
                            };
                        }, []);
                        var u = function () {
                            e &&
                                e.state &&
                                t.push(X, { nextUrl: e.state.redirectURL });
                        };
                        return Object(gr.jsx)(Jr, {
                            title:
                                e.state && e.state.context === Ne
                                    ? n("label.email_send_title")
                                    : r.email === r.username
                                    ? n("label.email_title_edit", {
                                          EMAIL: r.email,
                                      })
                                    : n("label.email_title"),
                            children: Object(gr.jsxs)(rn, {
                                className: "confirm-success",
                                children: [
                                    Object(gr.jsx)(_r.IconCheckCircle, {
                                        color: "colorGreen6",
                                        size: 60,
                                    }),
                                    Object(gr.jsx)("p", {
                                        children: n(
                                            "label.email_confirm_success"
                                        ),
                                    }),
                                    Object(gr.jsx)(_r.Button, {
                                        css: { marginTop: "2rem" },
                                        loading: o,
                                        onClick: function () {
                                            i(!0);
                                        },
                                        expanded: !0,
                                        children: n("button.continue"),
                                    }),
                                ],
                            }),
                        });
                    }),
                gn =
                    (r(1501),
                    function () {
                        var e = Object(d.g)(),
                            t = e.state ? e.state.nextUrl : "/login3",
                            r = Object(Nr.a)().t,
                            n = Object(l.e)(function (e) {
                                return e.session.client;
                            }).displayName;
                        return (
                            Object(a.useEffect)(function () {
                                _window.location.assign(t);
                            }, []),
                            Object(gr.jsxs)("div", {
                                className: "redirect",
                                children: [
                                    Object(gr.jsx)("div", {
                                        className: "redirect-icon-container",
                                        children: Object(gr.jsx)(_r.LogoHp, {
                                            name: "hp",
                                            appearance: "multicolor",
                                            size: 48,
                                        }),
                                    }),
                                    Object(gr.jsx)("div", {
                                        className: "redirect-text-container",
                                        children: Object(gr.jsx)("h5", {
                                            children: r(
                                                "label.redirect_to_client",
                                                { APPNAME: n }
                                            ),
                                        }),
                                    }),
                                    Object(gr.jsxs)("div", {
                                        className: "redirect-spinner-container",
                                        children: [
                                            Object(gr.jsx)("h5", {
                                                children: r("label.wait_msg"),
                                            }),
                                            Object(gr.jsx)(
                                                _r.ProgressIndicator,
                                                {
                                                    css: {
                                                        transform: "scale(3)",
                                                        paddingBottom: "30px",
                                                    },
                                                }
                                            ),
                                        ],
                                    }),
                                ],
                            })
                        );
                    }),
                wn =
                    (r(1502),
                    function () {
                        var e = Object(Nr.a)().t,
                            t = Object(l.e)(function (e) {
                                return e.error;
                            });
                        return Object(gr.jsx)(Jr, {
                            hideTitle: !0,
                            children: Object(gr.jsxs)(rn, {
                                className: "error-panel",
                                children: [
                                    Object(gr.jsx)("h5", {
                                        id: "message",
                                        children: t.message
                                            ? e(t.message)
                                            : e("errors.err_general"),
                                    }),
                                    Object(gr.jsxs)("div", {
                                        className: "error-request-id text-sm",
                                        children: [
                                            t.error &&
                                                Object(gr.jsx)("p", {
                                                    id: "description",
                                                    children:
                                                        t.error.toUpperCase(),
                                                }),
                                            t["x-request-id"] &&
                                                Object(gr.jsxs)("p", {
                                                    id: "x-request-id",
                                                    children: [
                                                        Object(gr.jsx)("span", {
                                                            className: "bold",
                                                            children:
                                                                "X-request-id: ",
                                                        }),
                                                        t["x-request-id"],
                                                    ],
                                                }),
                                            t["correlation-id"] &&
                                                Object(gr.jsxs)("p", {
                                                    id: "correlation-id",
                                                    children: [
                                                        Object(gr.jsx)("span", {
                                                            className: "bold",
                                                            children:
                                                                "Correlation-id: ",
                                                        }),
                                                        t["correlation-id"],
                                                    ],
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        });
                    }),
                kn = r(525),
                Nn = function () {
                    var e,
                        t = {},
                        r = Object(kn.a)(
                            new URLSearchParams(Object(d.g)().search)
                        );
                    try {
                        for (r.s(); !(e = r.n()).done; ) {
                            var n = Object(xr.a)(e.value, 2),
                                a = n[0],
                                c = n[1];
                            t[a] = c;
                        }
                    } catch (s) {
                        r.e(s);
                    } finally {
                        r.f();
                    }
                    return t;
                },
                yn =
                    (r(1503),
                    function () {
                        var e = Object(l.d)(),
                            t = Object(Nr.a)().t,
                            r = Nn(),
                            n = r && r.post_logout_redirect_uri,
                            c = Object(a.useState)(!1),
                            s = Object(xr.a)(c, 2),
                            o = s[0],
                            i = s[1],
                            u = function (t) {
                                o || (e.user.logout(t), i(!0));
                            };
                        return (
                            Object(a.useEffect)(
                                function () {
                                    if (n) {
                                        var t = setTimeout(function () {
                                            return u(n);
                                        }, 5e3);
                                        return function () {
                                            t && clearTimeout(t);
                                        };
                                    }
                                    e.error.goError({
                                        message: "errors.err_logout_redirect",
                                    });
                                },
                                [n]
                            ),
                            Object(gr.jsx)(Jr, {
                                hideTitle: !0,
                                children: Object(gr.jsxs)(rn, {
                                    className: "logout-panel",
                                    children: [
                                        Object(gr.jsx)("div", {
                                            className:
                                                "row justify-content-center",
                                            children: Object(gr.jsx)(
                                                _r.ProgressIndicator,
                                                {
                                                    css: {
                                                        transform: "scale(2)",
                                                        paddingBottom: "10px",
                                                    },
                                                }
                                            ),
                                        }),
                                        Object(gr.jsx)("p", {
                                            className: "title bold",
                                            children: t("label.logout_msg"),
                                        }),
                                        Object(gr.jsx)("p", {
                                            children: t(
                                                "label.recovery_password_success_two"
                                            ),
                                        }),
                                        Object(gr.jsx)("div", {
                                            className: "skip-wait",
                                            children: Object(gr.jsx)(Pr, {
                                                onClick: function () {
                                                    return u(n);
                                                },
                                                children: t(
                                                    "label.recovery_skip_wait"
                                                ),
                                            }),
                                        }),
                                    ],
                                }),
                            })
                        );
                    }),
                En = (function () {
                    var e = Object(y.a)(
                        N.a.mark(function e(t) {
                            var r, n, a, c;
                            return N.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            (r = t.query),
                                                (n = t.dispatch),
                                                (a = r.get(te)),
                                                (e.t0 = a),
                                                (e.next =
                                                    e.t0 === fe
                                                        ? 5
                                                        : "create" === e.t0
                                                        ? 10
                                                        : e.t0 === je
                                                        ? 12
                                                        : 14);
                                            break;
                                        case 5:
                                            if (!r.has(se)) {
                                                e.next = 9;
                                                break;
                                            }
                                            return (
                                                (c = r.get(se)),
                                                (e.next = 9),
                                                n.user.loginWithHint({
                                                    username: c,
                                                })
                                            );
                                        case 9:
                                            return e.abrupt("break", 14);
                                        case 10:
                                            return (
                                                n(Object(Et.e)(M)),
                                                e.abrupt("break", 14)
                                            );
                                        case 12:
                                            return (
                                                n(Object(Et.e)(F)),
                                                e.abrupt("break", 14)
                                            );
                                        case 14:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t) {
                        return e.apply(this, arguments);
                    };
                })(),
                Sn = (function () {
                    var e = Object(y.a)(
                        N.a.mark(function e(t) {
                            var r, n, a, c;
                            return N.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (
                                                ((n = t.data),
                                                (a = t.query),
                                                (c = t.dispatch),
                                                !(
                                                    ![
                                                        Ie,
                                                        Pe,
                                                        Le,
                                                        qe,
                                                        Re,
                                                    ].includes(
                                                        null === n ||
                                                            void 0 === n
                                                            ? void 0
                                                            : n.status
                                                    ) &&
                                                    !0 ===
                                                        (null === n ||
                                                        void 0 === n ||
                                                        null ===
                                                            (r = n.client) ||
                                                        void 0 === r
                                                            ? void 0
                                                            : r.supportHPIDNativeLogin)
                                                ))
                                            ) {
                                                e.next = 8;
                                                break;
                                            }
                                            return (
                                                (e.next = 6),
                                                En({ query: a, dispatch: c })
                                            );
                                        case 6:
                                            e.next = 9;
                                            break;
                                        case 8:
                                            Tt.trackPageView();
                                        case 9:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t) {
                        return e.apply(this, arguments);
                    };
                })();
            function Cn(e) {
                return [se, ae, re, ne, oe, te, ue, de, pe, me, be].reduce(
                    function (t, r) {
                        return (
                            null !== e.get(r) &&
                                (t[r] = (function (e) {
                                    var t =
                                            arguments.length > 1 &&
                                            void 0 !== arguments[1]
                                                ? arguments[1]
                                                : "",
                                        r = Ot.paramDefaultValues || {};
                                    return e in r
                                        ? "true" === t ||
                                              ("false" !== t && r[e])
                                        : "string" === typeof t &&
                                          t.length > 256 &&
                                          e !== pe
                                        ? t.substring(0, 256)
                                        : t;
                                })(r, e.get(r))),
                            t
                        );
                    },
                    {}
                );
            }
            var In = function (e) {
                    var t = e.children,
                        r = (function () {
                            var e = Object(d.g)().search;
                            return new URLSearchParams(e);
                        })(),
                        n = Object(d.f)(),
                        c = Object(l.d)(),
                        s = Object(a.useState)(!0),
                        o = Object(xr.a)(s, 2),
                        i = o[0],
                        u = o[1],
                        b = Object(l.e)(function (e) {
                            return e.user[pe];
                        });
                    Object(a.useEffect)(function () {
                        function e() {
                            return (e = Object(y.a)(
                                N.a.mark(function e() {
                                    var t, n;
                                    return N.a.wrap(
                                        function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if (
                                                            ((t =
                                                                r.has(pe) &&
                                                                r.get(pe) !==
                                                                    b),
                                                            c.user.updateParams(
                                                                Cn(r)
                                                            ),
                                                            (e.prev = 2),
                                                            !t)
                                                        ) {
                                                            e.next = 9;
                                                            break;
                                                        }
                                                        return (
                                                            (e.next = 6),
                                                            c.session.initSessionWithFlow(
                                                                r.get(pe)
                                                            )
                                                        );
                                                    case 6:
                                                        (n = e.sent),
                                                            (e.next = 12);
                                                        break;
                                                    case 9:
                                                        return (
                                                            (e.next = 11),
                                                            c.session.fetchSessionInfo()
                                                        );
                                                    case 11:
                                                        n = e.sent;
                                                    case 12:
                                                        return (
                                                            (e.next = 14), p()
                                                        );
                                                    case 14:
                                                        return (
                                                            m(n),
                                                            (e.next = 17),
                                                            Sn({
                                                                data: n,
                                                                query: r,
                                                                dispatch: c,
                                                            })
                                                        );
                                                    case 17:
                                                        e.next = 22;
                                                        break;
                                                    case 19:
                                                        (e.prev = 19),
                                                            (e.t0 = e.catch(2)),
                                                            c.error.goError(
                                                                e.t0
                                                            );
                                                    case 22:
                                                        return (
                                                            (e.prev = 22),
                                                            u(!1),
                                                            e.finish(22)
                                                        );
                                                    case 25:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        null,
                                        [[2, 19, 22, 25]]
                                    );
                                })
                            )).apply(this, arguments);
                        }
                        !(function () {
                            e.apply(this, arguments);
                        })();
                    }, []);
                    var p = (function () {
                            var e = Object(y.a)(
                                N.a.mark(function e() {
                                    return N.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if (
                                                        ((e.t0 = !r.get(ue)),
                                                        !e.t0)
                                                    ) {
                                                        e.next = 5;
                                                        break;
                                                    }
                                                    return (
                                                        (e.next = 4),
                                                        c.user.setCountry()
                                                    );
                                                case 4:
                                                    e.t0 = e.sent;
                                                case 5:
                                                    return e.abrupt(
                                                        "return",
                                                        e.t0
                                                    );
                                                case 6:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function () {
                                return e.apply(this, arguments);
                            };
                        })(),
                        m = function (e) {
                            var t;
                            Tt.setVariable({
                                clientID:
                                    null === e ||
                                    void 0 === e ||
                                    null === (t = e.client) ||
                                    void 0 === t
                                        ? void 0
                                        : t.displayName,
                            }),
                                n.listen(function () {
                                    return Tt.trackPageView();
                                });
                        };
                    return i ? Object(gr.jsx)(qr, {}) : t;
                },
                Pn = r(237),
                Ln = r.n(Pn);
            var Rn = function (e) {
                    var t = e.children,
                        r = Object(l.e)(function (e) {
                            return e.session.theme_id;
                        }),
                        n = Object(l.d)(),
                        c = new URLSearchParams(Object(d.g)().search);
                    Object(a.useEffect)(
                        function () {
                            if (c.has(ie)) {
                                var e = c.get(ie);
                                n.session.update(Object(b.a)({}, ie, e));
                            }
                        },
                        [r]
                    );
                    var s = r ? Ln.a.colorGray10 : Ln.a.colorGray1,
                        o = r ? "white" : Ln.a.colorGray10;
                    return Object(gr.jsx)("div", {
                        className: "app-content",
                        style: { backgroundColor: s, color: o },
                        children: Object(gr.jsx)(_r.ThemeProvider, {
                            mode: r ? "dark" : "light",
                            children: Object(gr.jsx)(gr.Fragment, {
                                children: t,
                            }),
                        }),
                    });
                },
                Tn = function () {
                    var e = Object(Nr.a)().t,
                        t = Object(l.d)(),
                        r = { password: "" },
                        n = Object(a.useState)(r),
                        c = Object(xr.a)(n, 2),
                        s = c[0],
                        o = c[1],
                        i = Object(l.e)(function (e) {
                            return e.loading.effects.user;
                        }).login,
                        u = Object(a.useState)(!1),
                        d = Object(xr.a)(u, 2),
                        b = d[0],
                        p = d[1],
                        m = Object(Gr.useForm)({ defaultValues: r }),
                        f = m.register,
                        j = m.formState,
                        h = m.clearError,
                        O = m.handleSubmit,
                        v = m.errors,
                        x = m.setError,
                        _ = m.setValue,
                        g = m.triggerValidation,
                        w = Xr({
                            setStateValues: o,
                            values: s,
                            setValue: _,
                            formState: j,
                            errors: v,
                            clearError: h,
                            triggerValidation: g,
                        }),
                        k = w.onChangeHandler,
                        S = w.onBlurHandler;
                    Object(a.useEffect)(
                        function () {
                            f(
                                { name: "password" },
                                { required: "form.err_password_empty" }
                            );
                        },
                        [f]
                    );
                    var C = et.PASSWORD,
                        I = (function () {
                            var e = Object(y.a)(
                                N.a.mark(function e(r) {
                                    var n, a, c;
                                    return N.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (n = r.password),
                                                        p(!0),
                                                        (c = {
                                                            options: (a = {
                                                                setLoading: p,
                                                                setError: x,
                                                                password: n,
                                                            }),
                                                            submitSelector: C,
                                                            callback:
                                                                t.user.login,
                                                            onHide: function () {
                                                                return p(!1);
                                                            },
                                                            formErrors: v,
                                                        }),
                                                        (e.next = 6),
                                                        t.user.login({
                                                            options: Object(
                                                                E.a
                                                            )(
                                                                Object(E.a)(
                                                                    {},
                                                                    a
                                                                ),
                                                                {},
                                                                {
                                                                    arkoseParams:
                                                                        c,
                                                                }
                                                            ),
                                                        })
                                                    );
                                                case 6:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function (t) {
                                return e.apply(this, arguments);
                            };
                        })();
                    return Object(gr.jsxs)("form", {
                        className: "form-container",
                        onSubmit: O(I),
                        children: [
                            Object(gr.jsx)(_r.Password, {
                                id: "password",
                                name: "password",
                                className: "form-control",
                                value: s.password,
                                onChange: k("password"),
                                onBlur: S("password"),
                                placeholder: e("label.placeholder_password"),
                                error: !!v.password,
                                helperText: v.password && e(v.password.message),
                                maxLength: 200,
                                autoFocus: !0,
                            }),
                            Object(gr.jsx)("div", {
                                className: "submit-btn",
                                children: Object(gr.jsx)(_r.Button, {
                                    id: C,
                                    name: C,
                                    type: "submit",
                                    loading: b || i,
                                    expanded: !0,
                                    children: e("button.sign_in"),
                                }),
                            }),
                        ],
                    });
                },
                Vn =
                    (r(1505),
                    {
                        google: sn,
                        facebook: un,
                        azure: pn,
                        wechat: dn,
                        microsoft: fn,
                        hp: _r.LogoHp,
                        msp: _r.IconBuilding,
                    }),
                Un = function (e) {
                    e.button, e.text;
                    var t = e.className,
                        r = e.provider,
                        n =
                            (e.children,
                            e.multicolor,
                            Object(Er.a)(e, [
                                "button",
                                "text",
                                "className",
                                "provider",
                                "children",
                                "multicolor",
                            ])),
                        a = Object(Nr.a)().t,
                        c = Object(l.d)(),
                        s = Vn[r.icon],
                        o = (function () {
                            var e = Object(y.a)(
                                N.a.mark(function e(t) {
                                    return N.a.wrap(
                                        function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            (e.prev = 0),
                                                            Tt.trackEvent(
                                                                ee.EVENTS
                                                                    .HPID_SOCIAL_LOGIN_ATTEMPT,
                                                                {
                                                                    formName:
                                                                        "FEDERATED_LOG_IN_ATTEMPT_"
                                                                            .concat(
                                                                                t.name
                                                                            )
                                                                            .toUpperCase(),
                                                                }
                                                            ),
                                                            (e.next = 4),
                                                            c.user.initFederated(
                                                                t.name
                                                            )
                                                        );
                                                    case 4:
                                                        e.next = 9;
                                                        break;
                                                    case 6:
                                                        (e.prev = 6),
                                                            (e.t0 = e.catch(0)),
                                                            console.error(e.t0);
                                                    case 9:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        null,
                                        [[0, 6]]
                                    );
                                })
                            );
                            return function (t) {
                                return e.apply(this, arguments);
                            };
                        })();
                    return Object(gr.jsx)(
                        _r.Button,
                        Object(E.a)(
                            Object(E.a)(
                                {
                                    leadingIcon: Object(gr.jsx)(s, {
                                        multicolor: r.multicolor,
                                        filled: !0,
                                    }),
                                    appearance: "secondary",
                                    id: r.identityProvider,
                                    className: Cr()("social-button", r.icon, t),
                                    expanded: !0,
                                    onClick: function () {
                                        return (function (e) {
                                            return o(e);
                                        })(r);
                                    },
                                },
                                n
                            ),
                            {},
                            {
                                children: Object(gr.jsx)("span", {
                                    className: "button-text",
                                    children: a("button.social_login", {
                                        NAME: r.displayName && r.displayName,
                                    }),
                                }),
                            }
                        )
                    );
                },
                An =
                    (r(505),
                    function () {
                        var e = Object(l.e)(function (e) {
                                return e;
                            }).session,
                            t = Object(l.e)(function (e) {
                                return e.user;
                            }),
                            r = t.locale,
                            n = t.country,
                            a = Object(l.e)(function (e) {
                                return e.session.client[ge];
                            }),
                            c = Object(Nr.a)().t,
                            s = (function (e, t, r, n) {
                                if (!e.length) return null;
                                var a = [
                                        "facebook",
                                        "google",
                                        "wechat",
                                        "azure",
                                        "msp",
                                    ],
                                    c = [
                                        "wechat",
                                        "facebook",
                                        "google",
                                        "azure",
                                        "msp",
                                    ],
                                    s = n
                                        ? e.filter(function (e) {
                                              return e.identityProvider !== Qe;
                                          })
                                        : Object(Yr.a)(e);
                                return r.match(/^zh_\w{2}$/) || "CN" === t
                                    ? s.sort(function (e, t) {
                                          return (
                                              c.indexOf(e.identityProvider) -
                                              c.indexOf(t.identityProvider)
                                          );
                                      })
                                    : s.sort(function (e, t) {
                                          return (
                                              a.indexOf(e.identityProvider) -
                                              a.indexOf(t.identityProvider)
                                          );
                                      });
                            })(e.supportedIDP, n, r, a);
                        return s
                            ? Object(gr.jsxs)("div", {
                                  className: "social-login-content",
                                  children: [
                                      a &&
                                          s.length > 0 &&
                                          Object(gr.jsx)("p", {
                                              children: c("label.social_login"),
                                          }),
                                      s.map(function (e, t) {
                                          return Object(gr.jsx)(
                                              "div",
                                              {
                                                  className:
                                                      "social-item ".concat(
                                                          e.identityProvider
                                                      ),
                                                  children: Object(gr.jsx)(
                                                      Un,
                                                      {
                                                          button: !0,
                                                          provider: e,
                                                          text: c(e.text, {
                                                              IDPNAME:
                                                                  e.description,
                                                          }),
                                                      },
                                                      e.name
                                                  ),
                                              },
                                              t
                                          );
                                      }),
                                  ],
                              })
                            : null;
                    }),
                Mn =
                    (r(1506),
                    function () {
                        var e = Object(Nr.a)().t,
                            t = Object(l.d)(),
                            r = Object(l.e)(function (e) {
                                return e.user;
                            }),
                            n = Object(d.f)(),
                            c = { target: fe },
                            s = Object(a.useState)(r.username),
                            o = Object(xr.a)(s, 2),
                            i = o[0],
                            u = o[1];
                        Object(a.useEffect)(
                            function () {
                                var e = Object(Ht.a)(r.username);
                                e && u(e.formatInternational());
                            },
                            [r.username]
                        );
                        return Object(gr.jsxs)(Jr, {
                            children: [
                                Object(gr.jsxs)(rn, {
                                    className: "pass-panel",
                                    children: [
                                        Object(gr.jsx)("p", {
                                            children: e("label.password_hello"),
                                        }),
                                        Object(gr.jsx)("h5", {
                                            className:
                                                "username-label text-wrapper",
                                            children: i,
                                        }),
                                        Object(gr.jsx)(Tn, {}),
                                        Object(gr.jsx)("div", {
                                            className:
                                                "d-flex justify-content-center",
                                            children: Object(gr.jsx)(tn, {
                                                bold: !0,
                                                onClick: function () {
                                                    return t.user.handleBackLink(
                                                        c
                                                    );
                                                },
                                                children: e(
                                                    Kt(c, r)
                                                        ? "link.not_now"
                                                        : "link.back_link"
                                                ),
                                            }),
                                        }),
                                        Object(gr.jsx)("div", {
                                            className:
                                                "d-flex forgot-credential",
                                            children: Object(gr.jsx)(Pr, {
                                                id: "forgot-cred",
                                                onClick: function () {
                                                    return (
                                                        t.user.update(
                                                            Object(b.a)(
                                                                {},
                                                                he,
                                                                !1
                                                            )
                                                        ),
                                                        void n.push(F)
                                                    );
                                                },
                                                children: e(
                                                    "link.forgot_credentials"
                                                ),
                                            }),
                                        }),
                                        Object(gr.jsx)(An, {}),
                                    ],
                                }),
                                Object(gr.jsx)("div", {
                                    className: "d-flex justify-content-center",
                                    children: Object(gr.jsx)(en, {}),
                                }),
                            ],
                        });
                    }),
                Dn =
                    (r(1507),
                    function () {
                        var e = Object(Nr.a)().t,
                            t = Object(l.e)(function (e) {
                                return e;
                            }),
                            r = t.user,
                            n = t.loading,
                            c = Object(d.f)(),
                            s = Object(l.d)(),
                            o = { code: "", password: "", confirmPassword: "" },
                            i = Object(a.useState)(o),
                            u = Object(xr.a)(i, 2),
                            b = u[0],
                            p = u[1],
                            m = Object(a.useState)(""),
                            f = Object(xr.a)(m, 2),
                            j = f[0],
                            h = f[1],
                            O = Object(a.useState)(""),
                            v = Object(xr.a)(O, 2),
                            x = v[0],
                            _ = v[1],
                            g = Object(a.useState)(!1),
                            w = Object(xr.a)(g, 2),
                            k = w[0],
                            S = w[1],
                            C = Object(a.useState)(!1),
                            I = Object(xr.a)(C, 2),
                            P = I[0],
                            L = I[1],
                            R = Object(Gr.useForm)({ defaultValues: o }),
                            T = R.handleSubmit,
                            V = R.register,
                            U = R.getValues,
                            A = R.errors,
                            M = R.clearError,
                            D = R.setValue,
                            H = R.formState,
                            B = R.setError,
                            F = R.triggerValidation,
                            z = Xr({
                                setStateValues: p,
                                values: b,
                                setValue: D,
                                formState: H,
                                errors: A,
                                clearError: M,
                                triggerValidation: F,
                            }),
                            K = z.onChangeHandler,
                            G = z.onBlurHandler;
                        Object(a.useEffect)(function () {
                            V(
                                { name: "code" },
                                { required: "form.err_code_empty" }
                            ),
                                V(
                                    { name: "password" },
                                    {
                                        required:
                                            "form.err_password_reset_empty",
                                    }
                                ),
                                V(
                                    { name: "confirmPassword" },
                                    {
                                        required:
                                            "form.err_confirm_password_empty",
                                        validate: function (e) {
                                            if (e && e !== U().password)
                                                return "form.err_confirm_password_not_match";
                                        },
                                    }
                                );
                        }, []);
                        var Y = st.SAVE_BUTTON,
                            W = st.RESEND_CODE_LINK,
                            Q = (function () {
                                var e = Object(y.a)(
                                    N.a.mark(function e(t) {
                                        var n, a, o, i;
                                        return N.a.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (n = t.token),
                                                                (a = t.options),
                                                                (o = n && {
                                                                    data: n,
                                                                    type: it,
                                                                }),
                                                                (i = Object(
                                                                    E.a
                                                                )(
                                                                    Object(E.a)(
                                                                        {},
                                                                        a
                                                                    ),
                                                                    {},
                                                                    {
                                                                        username:
                                                                            r.username,
                                                                        captcha:
                                                                            o,
                                                                    }
                                                                )),
                                                                (e.prev = 3),
                                                                (e.next = 6),
                                                                s.user.resetPassword(
                                                                    i
                                                                )
                                                            );
                                                        case 6:
                                                            Tt.trackEvent(
                                                                ee.EVENTS
                                                                    .HPID_RESET_PASS_SUCCESS
                                                            ),
                                                                c.push(q),
                                                                (e.next = 21);
                                                            break;
                                                        case 10:
                                                            (e.prev = 10),
                                                                (e.t0 =
                                                                    e.catch(3)),
                                                                (e.t1 =
                                                                    e.t0.error),
                                                                (e.next =
                                                                    e.t1 === Ve
                                                                        ? 15
                                                                        : e.t1 ===
                                                                          Ue
                                                                        ? 18
                                                                        : 20);
                                                            break;
                                                        case 15:
                                                            return (
                                                                Tt.trackEvent(
                                                                    ee.EVENTS
                                                                        .HPID_INVALID_CODE,
                                                                    {
                                                                        formName:
                                                                            "PASSWORD_RECOVERY",
                                                                    }
                                                                ),
                                                                B(
                                                                    "code",
                                                                    "invalidCode",
                                                                    "form.err_invalid_email_code"
                                                                ),
                                                                e.abrupt(
                                                                    "break",
                                                                    21
                                                                )
                                                            );
                                                        case 18:
                                                            return (
                                                                B(
                                                                    "password",
                                                                    "invalidValue",
                                                                    "form.err_password_not_current"
                                                                ),
                                                                e.abrupt(
                                                                    "break",
                                                                    21
                                                                )
                                                            );
                                                        case 20:
                                                            s.error.goError(
                                                                e.t0
                                                            );
                                                        case 21:
                                                            return (
                                                                (e.prev = 21),
                                                                S(!1),
                                                                e.finish(21)
                                                            );
                                                        case 24:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            null,
                                            [[3, 10, 21, 24]]
                                        );
                                    })
                                );
                                return function (t) {
                                    return e.apply(this, arguments);
                                };
                            })(),
                            $ = (function () {
                                var e = Object(y.a)(
                                    N.a.mark(function e(t) {
                                        var n, a, c, o, i;
                                        return N.a.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (n = t.token),
                                                                (a = t.options),
                                                                (c = n && {
                                                                    data: n,
                                                                    type: it,
                                                                }),
                                                                (o = Object(
                                                                    E.a
                                                                )(
                                                                    Object(E.a)(
                                                                        {},
                                                                        a
                                                                    ),
                                                                    {},
                                                                    {
                                                                        recoveryInput:
                                                                            r.username,
                                                                        captcha:
                                                                            c,
                                                                    }
                                                                )),
                                                                (e.prev = 3),
                                                                (e.next = 6),
                                                                s.user.recoverPassword(
                                                                    o
                                                                )
                                                            );
                                                        case 6:
                                                            (i = e.sent),
                                                                h(i.email),
                                                                (e.next = 13);
                                                            break;
                                                        case 10:
                                                            (e.prev = 10),
                                                                (e.t0 =
                                                                    e.catch(3)),
                                                                _(e.t0.error);
                                                        case 13:
                                                            return (
                                                                (e.prev = 13),
                                                                L(!1),
                                                                e.finish(13)
                                                            );
                                                        case 16:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            null,
                                            [[3, 10, 13, 16]]
                                        );
                                    })
                                );
                                return function (t) {
                                    return e.apply(this, arguments);
                                };
                            })();
                        return Object(gr.jsx)(Jr, {
                            title: e("label.recovery_header_title"),
                            children: Object(gr.jsxs)(rn, {
                                className: "password-reset",
                                children: [
                                    Object(gr.jsx)("div", {
                                        className: "password-reset-desc",
                                        children: e(
                                            "label.recovery_password_reset_desc"
                                        ),
                                    }),
                                    Object(gr.jsxs)("form", {
                                        className: "form-container",
                                        onSubmit: T(function (e) {
                                            S(!0);
                                            var t = {
                                                options: e,
                                                callback: Q,
                                                submitSelector: Y,
                                                onHide: function () {
                                                    return S(!1);
                                                },
                                                formErrors: A,
                                            };
                                            s.arkose.handleArkose(t);
                                        }),
                                        children: [
                                            Object(gr.jsx)(_r.TextBox, {
                                                id: "code",
                                                name: "code",
                                                className: "form-control",
                                                value: b.code,
                                                onChange: K("code"),
                                                onBlur: G("code"),
                                                placeholder: e(
                                                    "label.email_code_placeholder"
                                                ),
                                                error: !!A.code,
                                                helperText:
                                                    A.code && e(A.code.message),
                                                autoFocus: !0,
                                                maxLength: 256,
                                            }),
                                            Object(gr.jsx)(Zr, {
                                                id: "password",
                                                name: "password",
                                                className:
                                                    "form-control-ui-password",
                                                placeholder: e(
                                                    "label.placeholder_new_password"
                                                ),
                                                value: b.password,
                                                error: A.password,
                                                locale: r.locale,
                                                onChange: K("password"),
                                            }),
                                            Object(gr.jsx)(_r.Password, {
                                                id: "confirmPassword",
                                                name: "confirmPassword",
                                                value: b.confirmPassword,
                                                className: "form-control",
                                                onChange: K("confirmPassword"),
                                                onBlur: G("confirmPassword"),
                                                placeholder: e(
                                                    "label.placeholder_confirm_password"
                                                ),
                                                error: !!A.confirmPassword,
                                                helperText:
                                                    A.confirmPassword &&
                                                    e(
                                                        A.confirmPassword
                                                            .message
                                                    ),
                                                maxLength: 200,
                                            }),
                                            Object(gr.jsx)(_r.Button, {
                                                type: "submit",
                                                id: Y,
                                                name: "save",
                                                loading: k,
                                                expanded: !0,
                                                children: e("button.save"),
                                            }),
                                        ],
                                    }),
                                    Object(gr.jsxs)("div", {
                                        className: "request-code",
                                        children: [
                                            Object(gr.jsx)("div", {
                                                className:
                                                    "row justify-content-center",
                                                children: Object(gr.jsx)(Pr, {
                                                    id: W,
                                                    onClick: function () {
                                                        var e =
                                                            arguments.length >
                                                                0 &&
                                                            void 0 !==
                                                                arguments[0]
                                                                ? arguments[0]
                                                                : {};
                                                        _(""), L(!0);
                                                        var t = {
                                                            options: e,
                                                            callback: $,
                                                            submitSelector: W,
                                                            onHide: function () {
                                                                return L(!1);
                                                            },
                                                            formErrors: A,
                                                        };
                                                        Tt.trackEvent(
                                                            ee.EVENTS
                                                                .HPID_RESEND_CODE_REQ,
                                                            {
                                                                formName:
                                                                    "REQUEST_NEW_OTP_PASSWORD_RESET",
                                                            }
                                                        ),
                                                            s.arkose.handleArkose(
                                                                t
                                                            );
                                                    },
                                                    children: e(
                                                        "label.email_resend_code"
                                                    ),
                                                }),
                                            }),
                                            (P ||
                                                n.effects.user
                                                    .recoverPassword) &&
                                                Object(gr.jsx)("div", {
                                                    className:
                                                        "row justify-content-center loading-content margin-default",
                                                    children: Object(gr.jsx)(
                                                        _r.ProgressIndicator,
                                                        {}
                                                    ),
                                                }),
                                            Object(gr.jsxs)("div", {
                                                className:
                                                    "hide-notification-button",
                                                children: [
                                                    j &&
                                                        Object(gr.jsx)(
                                                            _r.InlineNotification,
                                                            {
                                                                title: e(
                                                                    "label.email_resend_to",
                                                                    { EMAIL: j }
                                                                ),
                                                                type: "positive",
                                                            }
                                                        ),
                                                    x &&
                                                        Object(gr.jsx)(
                                                            _r.InlineNotification,
                                                            {
                                                                title: x,
                                                                type: "negative",
                                                            }
                                                        ),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        });
                    }),
                Hn =
                    (r(1508),
                    function () {
                        var e = Object(l.d)(),
                            t = Object(d.g)(),
                            r = Object(d.f)(),
                            n = Object(Nr.a)().t,
                            c = Object(a.useState)(!1),
                            s = Object(xr.a)(c, 2),
                            o = s[0],
                            i = s[1],
                            u = ((t && t.state) || {}).page;
                        Object(a.useEffect)(
                            function () {
                                var e = _window.setTimeout(function () {
                                    return b(u);
                                }, 5e3);
                                return function () {
                                    e && clearTimeout(e);
                                };
                            },
                            [u]
                        );
                        var b = function (t) {
                            o ||
                                (t === V ? e.user.redirectToAPP() : r.push(R),
                                i(!0));
                        };
                        return Object(gr.jsx)(Jr, {
                            title: n("label.recovery_header_title"),
                            children: Object(gr.jsxs)(rn, {
                                className: "reset-success",
                                children: [
                                    Object(gr.jsx)("div", {
                                        className: "row justify-content-center",
                                        children: Object(gr.jsx)(
                                            _r.ProgressIndicator,
                                            {}
                                        ),
                                    }),
                                    Object(gr.jsx)("p", {
                                        className: "margin-top-10",
                                        children: n(
                                            "label.recovery_password_success_one"
                                        ),
                                    }),
                                    Object(gr.jsx)("p", {
                                        children: n(
                                            "label.recovery_password_success_two"
                                        ),
                                    }),
                                    Object(gr.jsx)("div", {
                                        className: "margin-top-10",
                                        children: Object(gr.jsx)(Pr, {
                                            onClick: function () {
                                                return b(u);
                                            },
                                            children: n(
                                                "label.recovery_skip_wait"
                                            ),
                                        }),
                                    }),
                                ],
                            }),
                        });
                    }),
                Bn =
                    (r(1509),
                    function () {
                        var e = Object(d.f)(),
                            t = Object(l.d)(),
                            r = Object(Nr.a)().t,
                            n = Object(l.e)(function (e) {
                                return e.user;
                            }),
                            c = Object(a.useState)(n.username),
                            s = Object(xr.a)(c, 2),
                            o = s[0],
                            i = s[1],
                            u = n.identities[0];
                        if (!u) return e.replace(R), null;
                        var b = { target: fe };
                        return (
                            Object(a.useEffect)(
                                function () {
                                    var e = Object(Ht.a)(n.username);
                                    e && i(e.formatInternational());
                                },
                                [n.username]
                            ),
                            Object(gr.jsx)(Jr, {
                                hideTitle: !0,
                                children: Object(gr.jsxs)(rn, {
                                    className: "redirect-idp",
                                    children: [
                                        Object(gr.jsx)("p", {
                                            children: r("label.password_hello"),
                                        }),
                                        Object(gr.jsx)("h5", {
                                            className:
                                                "username-label text-wrapper",
                                            children: o,
                                        }),
                                        Object(gr.jsx)("p", {
                                            className: "redirect-idp-desc",
                                            children: r(
                                                "label.redirect_to_desc"
                                            ),
                                        }),
                                        Object(gr.jsx)(Un, {
                                            provider: u,
                                            button: !0,
                                        }),
                                        Object(gr.jsx)("div", {
                                            className:
                                                "d-flex justify-content-center",
                                            children: Object(gr.jsx)(tn, {
                                                onClick: function () {
                                                    return t.user.handleBackLink(
                                                        b
                                                    );
                                                },
                                                children: r(
                                                    Kt(b, n)
                                                        ? "link.not_now"
                                                        : "link.back_link"
                                                ),
                                            }),
                                        }),
                                    ],
                                }),
                            })
                        );
                    }),
                Fn = function (e) {
                    var t = e.children,
                        r = e.className;
                    return Object(gr.jsx)("div", {
                        className: Cr()("mobile-layout", r),
                        children: t,
                    });
                },
                zn = r(1530),
                qn = r(183),
                Kn =
                    (r(1512),
                    function (e) {
                        var t = e.countryIsoCode,
                            r = e.countryNumber,
                            n = e.countryName;
                        return Object(gr.jsxs)("div", {
                            className: "country-code-wrapper",
                            title: "+".concat(r, " ").concat(n),
                            children: [
                                t &&
                                    Object(gr.jsx)("span", {
                                        className: "country-icon",
                                        children: Object(gr.jsx)(qn.FlagIcon, {
                                            language: "_".concat(t),
                                        }),
                                    }),
                                Object(gr.jsxs)("span", {
                                    className: "country-number",
                                    children: ["+", r],
                                }),
                                Object(gr.jsx)("span", {
                                    className: "country-name",
                                    children: n,
                                }),
                            ],
                        });
                    });
            Kn.defaultProps = {
                countryIsoCode: "",
                countryNumber: 1,
                countryName: "",
            };
            var Gn = Kn,
                Yn =
                    (r(1513),
                    function (e) {
                        var t = e.onChange,
                            r = e.onBlur,
                            n = e.defaultIsoCode,
                            c = e.defaultValue,
                            s = e.locale,
                            o = e.countryNumbers,
                            i = e.error,
                            u = e.displayDisclaimer,
                            l = e.className,
                            d = Object(Nr.a)().t,
                            b = Object(a.useState)([]),
                            p = Object(xr.a)(b, 2),
                            m = p[0],
                            f = p[1],
                            j = Object(a.useState)([]),
                            h = Object(xr.a)(j, 2),
                            O = h[0],
                            v = h[1],
                            x = Object(a.useState)(n),
                            _ = Object(xr.a)(x, 2),
                            g = _[0],
                            w = _[1],
                            k = Object(a.useState)(c),
                            N = Object(xr.a)(k, 2),
                            y = N[0],
                            E = N[1];
                        Object(a.useEffect)(
                            function () {
                                var e = (function (e) {
                                    var t = {};
                                    return (
                                        e.forEach(function (e) {
                                            t[e.isoCode] = e.countryCode;
                                        }),
                                        t
                                    );
                                })(o);
                                w(
                                    Object.prototype.hasOwnProperty.call(e, n)
                                        ? n
                                        : "US"
                                );
                                var t = (function (e, t) {
                                    return e && t
                                        ? Object.keys(t).map(function (r) {
                                              return {
                                                  value: r,
                                                  label: Object(gr.jsx)(Gn, {
                                                      countryNumber: t[r],
                                                      countryName: e[r],
                                                  }),
                                                  searchName: "+"
                                                      .concat(t[r], " ")
                                                      .concat(e[r]),
                                              };
                                          })
                                        : [];
                                })(
                                    (function (e) {
                                        var t = {};
                                        return (
                                            e.forEach(function (e) {
                                                t[e.value] = e.label;
                                            }),
                                            t
                                        );
                                    })(
                                        d("countries:values", {
                                            returnObjects: !0,
                                        })
                                    ),
                                    e
                                );
                                f(t), v(t);
                            },
                            [s, o]
                        );
                        var S = function (e, r) {
                                var n = Object(Ht.a)(e, r);
                                n
                                    ? (n.isValid() &&
                                          (n = (function (e, t) {
                                              var r = e
                                                  .formatNational()
                                                  .replace(/\D+/g, "");
                                              return Object(Ht.a)(r, t);
                                          })(n, r)),
                                      t(n.number))
                                    : e.match(/^\+?[0-9]*$/)
                                    ? t(e)
                                    : (t(""), E(""));
                            },
                            C = {
                                searchPlaceholder: d("label.search"),
                                noResults: "No results found",
                                showingResult: "Showing %s result",
                                showingResults: "Showing %s results",
                                clear: "Clear",
                                open: "Open",
                                selected: "Selected",
                                unselected: "Unselected",
                            };
                        return Object(gr.jsxs)("div", {
                            className: "phone-number-wrapper ".concat(l),
                            children: [
                                Object(gr.jsx)("div", {
                                    className: "select-wrapper",
                                    children: Object(gr.jsx)(_r.Select, {
                                        i18n: C,
                                        id: "isoCode",
                                        options: O,
                                        value: [g],
                                        clearIcon: !1,
                                        onChange: function (e) {
                                            var t = e.value;
                                            w(t), S(y, t);
                                        },
                                        onBlur: r,
                                        showSearch: !0,
                                        onSearch: function (e) {
                                            v(
                                                m.filter(function (t) {
                                                    return (function (t) {
                                                        return t.searchName
                                                            .toUpperCase()
                                                            .includes(
                                                                e.toUpperCase()
                                                            );
                                                    })(t);
                                                })
                                            );
                                        },
                                        placeholder: Object(gr.jsx)(Gn, {}),
                                        error: !!i,
                                        helperText:
                                            i ||
                                            (u
                                                ? d(
                                                      "label.sign_up_mobile_number_subtitle"
                                                  )
                                                : ""),
                                    }),
                                }),
                                Object(gr.jsx)("div", {
                                    className: "phone-number",
                                    children: Object(gr.jsx)(_r.TextBox, {
                                        id: "phoneNumber",
                                        name: "phoneNumber",
                                        value: new zn.a(g).input(y),
                                        label: d(
                                            "label.placeholder_mobile_number"
                                        ),
                                        onChange: function (e) {
                                            E(e), S(e, g);
                                        },
                                        onBlur: r,
                                        error: !!i,
                                    }),
                                }),
                            ],
                        });
                    });
            Yn.defaultProps = {
                defaultIsoCode: "US",
                defaultValue: "",
                locale: "en_US",
                countryNumbers: [],
                error: "",
                displayDisclaimer: !1,
                className: "",
            };
            var Wn,
                Qn = Yn,
                $n =
                    ((Wn = {}),
                    Object(b.a)(Wn, re, null),
                    Object(b.a)(Wn, ne, null),
                    Object(b.a)(Wn, ae, null),
                    Wn),
                Zn = function (e) {
                    var t = e.hideConfirmPassword,
                        r = void 0 !== t && t,
                        n = Object(Nr.a)().t,
                        c = Object(d.g)(),
                        s = Object(d.f)(),
                        o = Object(l.d)(),
                        i = Object(l.e)(function (e) {
                            return e.user;
                        }),
                        u = Object(l.e)(function (e) {
                            return e.session;
                        }),
                        p = u.smsSupportedCountryNumbers,
                        m = u.client,
                        f =
                            void 0 === m.marketingConsents ||
                            m.marketingConsents.length > 0,
                        j = Object(l.e)(function (e) {
                            return e.loading.effects.user;
                        }),
                        h = j.submitSignUp,
                        O = j.submitFederatedSignUp,
                        v = i[oe],
                        x = {
                            firstName: i[re] || "",
                            lastName: i[ne] || "",
                            email: i[ae] || "",
                            phoneNumber: "",
                            password: "",
                            confirmPassword: "",
                            countryResidence: i.country || "US",
                            captcha: "",
                            market: void 0,
                        },
                        _ = Object(a.useState)(x),
                        g = Object(xr.a)(_, 2),
                        w = g[0],
                        k = g[1],
                        S = Object(a.useState)(!1),
                        C = Object(xr.a)(S, 2),
                        I = C[0],
                        P = C[1],
                        L = Object(a.useState)(!1),
                        V = Object(xr.a)(L, 2),
                        U = V[0],
                        A = V[1],
                        H = Object(Gr.useForm)({ defaultValues: x }),
                        B = H.register,
                        F = H.formState,
                        z = H.clearError,
                        q = H.getValues,
                        G = H.handleSubmit,
                        Y = H.errors,
                        W = H.setError,
                        Q = H.setValue,
                        $ = H.triggerValidation,
                        Z = Xr({
                            setStateValues: k,
                            values: w,
                            setValue: Q,
                            formState: F,
                            errors: Y,
                            clearError: z,
                            triggerValidation: $,
                        }),
                        J = Z.onChangeHandler,
                        te = Z.onBlurHandler,
                        se = tt.SUBMIT,
                        ie = (c && c.state) || {},
                        ue = ie.isExternalIdentity,
                        le = ie.provider,
                        de = function (e) {
                            e.completed &&
                                pe(
                                    Object(E.a)(
                                        Object(E.a)({}, w),
                                        {},
                                        { captcha: { data: e.token, type: ut } }
                                    )
                                );
                        };
                    Object(a.useEffect)(
                        function () {
                            B(
                                { name: "firstName" },
                                { required: "form.err_first_name_empty" }
                            ),
                                B(
                                    { name: "lastName" },
                                    { required: "form.err_last_name_empty" }
                                ),
                                B(
                                    { name: "email" },
                                    {
                                        required: "form.err_email_empty",
                                        pattern: {
                                            value: Ot.emailRegex,
                                            message: "form.err_email_invalid",
                                        },
                                    }
                                ),
                                B({ name: "phoneNumber" }, { validate: zt }),
                                !ue &&
                                    B(
                                        { name: "password" },
                                        {
                                            required:
                                                "form.err_password_create_empty",
                                        }
                                    ),
                                !r &&
                                    !ue &&
                                    B(
                                        { name: "confirmPassword" },
                                        {
                                            required:
                                                "form.err_confirm_password_empty",
                                            validate: function (e) {
                                                return e && q().password !== e
                                                    ? "form.err_confirm_password_not_match"
                                                    : qt(e).isValidPassword
                                                    ? void 0
                                                    : "form.password_check_requirements";
                                            },
                                        }
                                    ),
                                B(
                                    { name: "countryResidence" },
                                    { required: "form.err_country_empty" }
                                );
                        },
                        [ue]
                    ),
                        Object(a.useEffect)(function () {
                            var e = [re, ne];
                            er(i.locale) && e.reverse(), e.push(ae);
                            var t = e.find(function (e) {
                                return !i[e];
                            });
                            t && $n[t] && $n[t].focus();
                        }, []),
                        Object(a.useEffect)(function () {
                            (p && p.length) ||
                                o.session.fetchSmsSupportedCountryNumbers();
                        }, []),
                        Object(a.useEffect)(
                            function () {
                                var e = p.find(function (e) {
                                    return e.isoCode === i.country;
                                });
                                A(e);
                            },
                            [p]
                        ),
                        Object(a.useEffect)(
                            function () {
                                f &&
                                    ((x.market =
                                        "US" === i.country || i.market || !1),
                                    f && B({ name: "market" }));
                            },
                            [f]
                        );
                    var be,
                        pe = (function () {
                            var e = Object(y.a)(
                                N.a.mark(function e(t) {
                                    var r, n;
                                    return N.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    (r = t.captcha),
                                                        P(!0),
                                                        r
                                                            ? me(t)
                                                            : ((n = {
                                                                  callback: de,
                                                                  submitSelector:
                                                                      se,
                                                                  onHide: function () {
                                                                      return P(
                                                                          !1
                                                                      );
                                                                  },
                                                                  formErrors: Y,
                                                                  arkoseKey: ut,
                                                              }),
                                                              o.arkose.handleArkose(
                                                                  n
                                                              ));
                                                case 3:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function (t) {
                                return e.apply(this, arguments);
                            };
                        })(),
                        me = (function () {
                            var e = Object(y.a)(
                                N.a.mark(function e(t) {
                                    var r;
                                    return N.a.wrap(
                                        function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if (
                                                            ((e.prev = 0), !ue)
                                                        ) {
                                                            e.next = 9;
                                                            break;
                                                        }
                                                        return (
                                                            Bt(i[ae]) &&
                                                                delete t.email,
                                                            (e.next = 5),
                                                            o.user.submitFederatedSignUp(
                                                                t
                                                            )
                                                        );
                                                    case 5:
                                                        (r = e.sent),
                                                            Tt.trackEvent(
                                                                ee.EVENTS
                                                                    .HPID_SOCIAL_LOGIN_ATTEMPT,
                                                                {
                                                                    formName:
                                                                        "SIGN_UP_SUCCESS_"
                                                                            .concat(
                                                                                le
                                                                            )
                                                                            .toUpperCase(),
                                                                }
                                                            ),
                                                            (e.next = 13);
                                                        break;
                                                    case 9:
                                                        return (
                                                            (e.next = 11),
                                                            o.user.submitSignUp(
                                                                t
                                                            )
                                                        );
                                                    case 11:
                                                        (r = e.sent),
                                                            Tt.trackEvent(
                                                                ee.EVENTS
                                                                    .HPID_SIGN_UP_SUCCESS,
                                                                {
                                                                    formName:
                                                                        "SIGN_UP_SUCCESS_HPID",
                                                                }
                                                            );
                                                    case 13:
                                                        r &&
                                                            r[we] &&
                                                            o.session.updateUserSession(
                                                                r[we]
                                                            ),
                                                            r.nextUrl &&
                                                                s.push(X, {
                                                                    nextUrl:
                                                                        r.nextUrl,
                                                                }),
                                                            fe(r, t),
                                                            (e.next = 22);
                                                        break;
                                                    case 18:
                                                        (e.prev = 18),
                                                            (e.t0 = e.catch(0)),
                                                            P(!1),
                                                            e.t0.error === He
                                                                ? (o.user.update(
                                                                      {
                                                                          username:
                                                                              t.email.trim(),
                                                                      }
                                                                  ),
                                                                  W(
                                                                      "email",
                                                                      "",
                                                                      (a =
                                                                          e.t0
                                                                              .error) ===
                                                                          He
                                                                          ? Object(
                                                                                gr.jsx
                                                                            )(
                                                                                Pr,
                                                                                {
                                                                                    id: "already-exists",
                                                                                    error: !0,
                                                                                    to: T,
                                                                                    children:
                                                                                        n(
                                                                                            "form.err_username_conflict"
                                                                                        ),
                                                                                }
                                                                            )
                                                                          : a
                                                                  ),
                                                                  Q(
                                                                      "captcha",
                                                                      null
                                                                  ))
                                                                : e.t0.error ===
                                                                  Ae
                                                                ? W(
                                                                      "password",
                                                                      "invalidPassword",
                                                                      "form.password_check_requirements"
                                                                  )
                                                                : o.error.goError(
                                                                      e.t0
                                                                  );
                                                    case 22:
                                                    case "end":
                                                        return e.stop();
                                                }
                                            var a;
                                        },
                                        e,
                                        null,
                                        [[0, 18]]
                                    );
                                })
                            );
                            return function (t) {
                                return e.apply(this, arguments);
                            };
                        })(),
                        fe = (function () {
                            var e = Object(y.a)(
                                N.a.mark(function e(t, r) {
                                    var n, a;
                                    return N.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    (e.t0 = t.status),
                                                        (e.next =
                                                            e.t0 === Pe
                                                                ? 3
                                                                : e.t0 === Ie
                                                                ? 8
                                                                : e.t0 === Le
                                                                ? 13
                                                                : 18);
                                                    break;
                                                case 3:
                                                    return (
                                                        o.user.update(
                                                            Object(b.a)(
                                                                {},
                                                                ce,
                                                                t.phoneNumber
                                                            )
                                                        ),
                                                        Tt.trackEvent(
                                                            ee.EVENTS
                                                                .HPID_VERIFY_PHONE_REQ,
                                                            {
                                                                formName:
                                                                    "VERIFY_PHONE_SIGN_UP",
                                                            }
                                                        ),
                                                        o.user.requestSMSCode(),
                                                        s.push(K),
                                                        e.abrupt("break", 20)
                                                    );
                                                case 8:
                                                    return (
                                                        o.user.update(
                                                            ((n = {}),
                                                            Object(b.a)(
                                                                n,
                                                                ae,
                                                                t.email
                                                            ),
                                                            Object(b.a)(
                                                                n,
                                                                "market",
                                                                r.market
                                                            ),
                                                            n)
                                                        ),
                                                        Tt.trackEvent(
                                                            ee.EVENTS
                                                                .HPID_VERIFY_EMAIL_REQ,
                                                            {
                                                                formName:
                                                                    "VERIFY_EMAIL_SIGN_UP",
                                                            }
                                                        ),
                                                        o.user.requestCode(),
                                                        s.push(D, {
                                                            from: M,
                                                            isExternalIdentity:
                                                                ue,
                                                        }),
                                                        e.abrupt("break", 20)
                                                    );
                                                case 13:
                                                    return (
                                                        o.user.update(
                                                            ((a = {}),
                                                            Object(b.a)(
                                                                a,
                                                                ce,
                                                                t.phoneNumber
                                                            ),
                                                            Object(b.a)(
                                                                a,
                                                                ae,
                                                                t.email
                                                            ),
                                                            Object(b.a)(
                                                                a,
                                                                "market",
                                                                r.market
                                                            ),
                                                            a)
                                                        ),
                                                        Tt.trackEvent(
                                                            ee.EVENTS
                                                                .HPID_VERIFY_PHONE_REQ,
                                                            {
                                                                formName:
                                                                    "VERIFY_PHONE_SIGN_UP",
                                                            }
                                                        ),
                                                        o.user.requestSMSCode(),
                                                        s.push(K),
                                                        e.abrupt("break", 20)
                                                    );
                                                case 18:
                                                    return (
                                                        (e.next = 20),
                                                        o.user.userCheckFlowURI(
                                                            t
                                                        )
                                                    );
                                                case 20:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function (t, r) {
                                return e.apply(this, arguments);
                            };
                        })(),
                        je = function (e) {
                            return function (t) {
                                var r = t.replace(/[<>]/g, "");
                                J(e)(r);
                            };
                        };
                    return Object(gr.jsxs)(rn, {
                        children: [
                            Object(gr.jsx)("div", {
                                className:
                                    "d-flex justify-content-center margin-b-20",
                                children: Object(gr.jsx)(Pr, {
                                    id: "sign-in",
                                    onClick: function () {
                                        return (
                                            o.user.update(
                                                Object(b.a)({}, he, !1)
                                            ),
                                            void s.push(R)
                                        );
                                    },
                                    children: n("link.sign_in"),
                                }),
                            }),
                            Object(gr.jsxs)("form", {
                                className: "form-container",
                                onSubmit: G(pe),
                                children: [
                                    Object(gr.jsx)("div", {
                                        className: "row-names",
                                        children: (function () {
                                            var e = [
                                                Object(gr.jsx)(
                                                    _r.TextBox,
                                                    {
                                                        id: "firstName",
                                                        className:
                                                            "form-control first-name label-alignment-ie",
                                                        name: "firstName",
                                                        label: n(
                                                            "label.placeholder_first_name"
                                                        ),
                                                        value: w.firstName,
                                                        error: !!Y.firstName,
                                                        helperText:
                                                            Y.firstName &&
                                                            n(
                                                                Y.firstName
                                                                    .message
                                                            ),
                                                        onChange:
                                                            je("firstName"),
                                                        onBlur: te("firstName"),
                                                        ref: function (e) {
                                                            $n[re] = e;
                                                        },
                                                        maxLength: 256,
                                                        required: !0,
                                                    },
                                                    "firstName"
                                                ),
                                                Object(gr.jsx)(
                                                    _r.TextBox,
                                                    {
                                                        id: "lastName",
                                                        className:
                                                            "form-control last-name label-alignment-ie",
                                                        name: "lastName",
                                                        label: n(
                                                            "label.placeholder_last_name"
                                                        ),
                                                        value: w.lastName,
                                                        error: !!Y.lastName,
                                                        helperText:
                                                            Y.lastName &&
                                                            n(
                                                                Y.lastName
                                                                    .message
                                                            ),
                                                        onChange:
                                                            je("lastName"),
                                                        onBlur: te("lastName"),
                                                        ref: function (e) {
                                                            $n[ne] = e;
                                                        },
                                                        maxLength: 256,
                                                        required: !0,
                                                    },
                                                    "lastName"
                                                ),
                                            ];
                                            return (
                                                er(i.locale) && e.reverse(), e
                                            );
                                        })(),
                                    }),
                                    Object(gr.jsx)(_r.TextBox, {
                                        id: "email",
                                        name: "email",
                                        className:
                                            "form-control label-alignment-ie",
                                        label: n("label.placeholder_email"),
                                        subtitle: n(
                                            "label.sign_up_email_subtitle"
                                        ),
                                        value: w.email,
                                        error: !!Y.email,
                                        helperText: Y.email
                                            ? "string" ===
                                              typeof Y.email.message
                                                ? n(Y.email.message)
                                                : Y.email.message
                                            : n("label.sign_up_email_subtitle"),
                                        onChange: J("email"),
                                        onBlur: te("email"),
                                        disabled: ue && Bt(i[ae]),
                                        ref: function (e) {
                                            $n[ae] = e;
                                        },
                                        maxLength: 256,
                                        required: !0,
                                    }),
                                    U &&
                                        Object(gr.jsx)(Qn, {
                                            name: "phoneNumber",
                                            className:
                                                "form-control label-alignment-ie",
                                            onChange: J("phoneNumber"),
                                            onBlur: te("phoneNumber"),
                                            countryNumbers: p,
                                            defaultIsoCode: i.country,
                                            locale: i.locale,
                                            error:
                                                Y.phoneNumber &&
                                                n(Y.phoneNumber.message),
                                            displayDisclaimer:
                                                m && m.requiresPhoneValidation,
                                        }),
                                    !ue &&
                                        Object(gr.jsx)(Zr, {
                                            id: "password",
                                            className:
                                                "form-control-ui-password label-alignment-ie",
                                            name: "password",
                                            label: n(
                                                "label.placeholder_password"
                                            ),
                                            value: w.password,
                                            error: Y.password,
                                            locale: i.locale,
                                            onChange: J("password"),
                                            autoFocus: !0,
                                            required: !0,
                                        }),
                                    !r &&
                                        !ue &&
                                        Object(gr.jsx)(_r.Password, {
                                            id: "confirmPassword",
                                            name: "confirmPassword",
                                            className:
                                                "form-control label-alignment-ie",
                                            label: n(
                                                "label.placeholder_confirm_password"
                                            ),
                                            value: w.confirmPassword,
                                            error: !!Y.confirmPassword,
                                            helperText:
                                                Y.confirmPassword &&
                                                n(Y.confirmPassword.message),
                                            onChange: J("confirmPassword"),
                                            onBlur: te("confirmPassword"),
                                            maxLength: 200,
                                            required: !0,
                                        }),
                                    Object(gr.jsx)(
                                        _r.Select,
                                        {
                                            className:
                                                "margin-b-16 label-alignment-ie",
                                            id: "countryResidence",
                                            label: n(
                                                "label.placeholder_country"
                                            ),
                                            value: [w.countryResidence],
                                            options: n("countries:values", {
                                                returnObjects: !0,
                                            }),
                                            onChange:
                                                ((be = "countryResidence"),
                                                function (e) {
                                                    var t,
                                                        r = e.value,
                                                        n = "US" === r;
                                                    Q(be, r.trim()),
                                                        Q("market", n),
                                                        k(
                                                            Object(E.a)(
                                                                Object(E.a)(
                                                                    {},
                                                                    w
                                                                ),
                                                                {},
                                                                ((t = {}),
                                                                Object(b.a)(
                                                                    t,
                                                                    be,
                                                                    r
                                                                ),
                                                                Object(b.a)(
                                                                    t,
                                                                    "market",
                                                                    n
                                                                ),
                                                                t)
                                                            )
                                                        ),
                                                        o.user.update({
                                                            country: r,
                                                        });
                                                }),
                                            error: !!Y.countryResidence,
                                            helperText:
                                                Y.countryResidence &&
                                                n(Y.countryResidence.message),
                                            visibleOptions: 6,
                                            clearIcon: !1,
                                            required: !0,
                                        },
                                        i.locale
                                    ),
                                    f &&
                                        Object(gr.jsx)("div", {
                                            children: Object(gr.jsx)(
                                                _r.Checkbox,
                                                {
                                                    id: "market",
                                                    name: "market",
                                                    className:
                                                        "text-wrapper margin-b-16",
                                                    label: n(
                                                        "label.marketing_consent"
                                                    ),
                                                    checked: w.market || !1,
                                                    onChange: function () {
                                                        Q("market", !w.market),
                                                            k(
                                                                Object(E.a)(
                                                                    Object(E.a)(
                                                                        {},
                                                                        w
                                                                    ),
                                                                    {},
                                                                    {
                                                                        market: !w.market,
                                                                    }
                                                                )
                                                            );
                                                    },
                                                }
                                            ),
                                        }),
                                    Object(gr.jsx)(Hr, {}),
                                    Object(gr.jsx)(_r.Button, {
                                        className: v ? "form-control" : "",
                                        type: "submit",
                                        id: se,
                                        name: se,
                                        loading: I || h || O,
                                        expanded: !0,
                                        children: n("button.sign_up"),
                                    }),
                                ],
                            }),
                            v &&
                                Object(gr.jsx)("div", {
                                    className: "d-flex justify-content-center",
                                    children: Object(gr.jsx)(tn, {
                                        onClick: function () {
                                            return o.user.redirectToAPP();
                                        },
                                        children: n("link.not_now"),
                                    }),
                                }),
                        ],
                    });
                },
                Xn =
                    (r(1514),
                    function () {
                        var e = Object(Nr.a)().t,
                            t = Object(l.e)(function (e) {
                                return e.session;
                            }).client,
                            r = Object(a.useState)(""),
                            n = Object(xr.a)(r, 2),
                            s = n[0],
                            o = n[1],
                            i = {},
                            u = c.a.useCallback(
                                function () {
                                    var e,
                                        t = _window.innerWidth;
                                    if (t >= 1200) e = Ze;
                                    else if (t >= 992) e = Xe;
                                    else if (t >= 768) e = Je;
                                    else if (t < 768) return o("");
                                    o(i[e] || "");
                                },
                                [i]
                            );
                        return (
                            Object(a.useEffect)(
                                function () {
                                    if (t.brandingImages.length)
                                        return (
                                            t.brandingImages.forEach(function (
                                                e
                                            ) {
                                                e.resolution === Ze
                                                    ? (i[Ze] = e.imageUri)
                                                    : e.resolution === Xe
                                                    ? (i[Xe] = e.imageUri)
                                                    : e.resolution === Je &&
                                                      (i[Je] = e.imageUri);
                                            }),
                                            u(),
                                            _window.addEventListener(
                                                "resize",
                                                u
                                            ),
                                            function () {
                                                _window.removeEventListener(
                                                    "resize",
                                                    u
                                                );
                                            }
                                        );
                                },
                                [t.brandingImages]
                            ),
                            document.body.classList.contains("mobile")
                                ? Object(gr.jsx)(Fn, {
                                      className: "sign-up",
                                      children: Object(gr.jsx)("div", {
                                          className:
                                              "container-fluid sign-up-form",
                                          children: Object(gr.jsx)("div", {
                                              className:
                                                  "row justify-content-center",
                                              children: Object(gr.jsxs)("div", {
                                                  className: "sign-up-wrapper",
                                                  children: [
                                                      Object(gr.jsx)("div", {
                                                          className:
                                                              "sign-up-header",
                                                          children: Object(
                                                              gr.jsxs
                                                          )("h5", {
                                                              className:
                                                                  "sign-up-title d-flex align-items-center justify-content-center",
                                                              children: [
                                                                  Object(
                                                                      gr.jsx
                                                                  )("span", {
                                                                      className:
                                                                          "d-inline-flex pr-3",
                                                                      children:
                                                                          Object(
                                                                              gr.jsx
                                                                          )(
                                                                              _r.LogoHp,
                                                                              {
                                                                                  name: "hp",
                                                                                  appearance:
                                                                                      "multicolor",
                                                                                  size: 32,
                                                                              }
                                                                          ),
                                                                  }),
                                                                  Object(
                                                                      gr.jsx
                                                                  )("span", {
                                                                      children:
                                                                          e(
                                                                              "label.sign_up_title"
                                                                          ),
                                                                  }),
                                                              ],
                                                          }),
                                                      }),
                                                      Object(gr.jsx)(Zn, {
                                                          hideConfirmPassword:
                                                              !0,
                                                      }),
                                                  ],
                                              }),
                                          }),
                                      }),
                                  })
                                : Object(gr.jsx)(zr, {
                                      children: Object(gr.jsxs)("div", {
                                          style: {
                                              backgroundImage: "url(".concat(
                                                  s,
                                                  ")"
                                              ),
                                          },
                                          className: Cr()("sign-up", {
                                              "sign-up-custom-bg": "" !== s,
                                          }),
                                          children: [
                                              Object(gr.jsx)("div", {
                                                  className:
                                                      "sign-up-default-bg",
                                                  children: Object(gr.jsx)(
                                                      "div",
                                                      {
                                                          className:
                                                              "container",
                                                          children: Object(
                                                              gr.jsx
                                                          )("div", {
                                                              className:
                                                                  "client-name row",
                                                              children: Object(
                                                                  gr.jsx
                                                              )("div", {
                                                                  className:
                                                                      "col-lg-8 col-md-5 align-self-center",
                                                                  children:
                                                                      t.displayName,
                                                              }),
                                                          }),
                                                      }
                                                  ),
                                              }),
                                              Object(gr.jsx)("div", {
                                                  className:
                                                      "container sign-up-form",
                                                  children: Object(gr.jsx)(
                                                      "div",
                                                      {
                                                          className:
                                                              "row justify-content-end",
                                                          children: Object(
                                                              gr.jsxs
                                                          )("div", {
                                                              className:
                                                                  "sign-up-wrapper",
                                                              children: [
                                                                  Object(
                                                                      gr.jsxs
                                                                  )("div", {
                                                                      className:
                                                                          "sign-up-header",
                                                                      children:
                                                                          [
                                                                              Object(
                                                                                  gr.jsx
                                                                              )(
                                                                                  "h5",
                                                                                  {
                                                                                      className:
                                                                                          "sign-up-title",
                                                                                      children:
                                                                                          e(
                                                                                              "label.sign_up_title"
                                                                                          ),
                                                                                  }
                                                                              ),
                                                                              Object(
                                                                                  gr.jsx
                                                                              )(
                                                                                  "p",
                                                                                  {
                                                                                      className:
                                                                                          "sign-up-desc",
                                                                                      children:
                                                                                          e(
                                                                                              "label.sign_up_subtitle"
                                                                                          ),
                                                                                  }
                                                                              ),
                                                                          ],
                                                                  }),
                                                                  Object(
                                                                      gr.jsx
                                                                  )(Zn, {}),
                                                              ],
                                                          }),
                                                      }
                                                  ),
                                              }),
                                          ],
                                      }),
                                  })
                        );
                    }),
                Jn = function (e) {
                    var t = e.color,
                        r = e.text;
                    return Object(gr.jsx)("div", {
                        className:
                            "container loader-container d-flex justify-content-center align-items-center",
                        children: Object(gr.jsxs)("div", {
                            className: "loader-content",
                            children: [
                                Object(gr.jsx)(_r.ProgressIndicator, {
                                    appearance: "linear",
                                    color: t,
                                    showLabel: !0,
                                }),
                                r && Object(gr.jsx)("h5", { children: r }),
                            ],
                        }),
                    });
                },
                ea = function () {
                    var e = Object(a.useState)(0),
                        t = Object(xr.a)(e, 2),
                        r = t[0],
                        n = t[1],
                        c = Object(Nr.a)().t,
                        s = Object(l.d)(),
                        o = Nn(),
                        i = Object(d.f)();
                    return (
                        Object(a.useEffect)(function () {
                            function e() {
                                return (e = Object(y.a)(
                                    N.a.mark(function e() {
                                        var t, r, a, c, u;
                                        return N.a.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                ((e.prev = 0),
                                                                o.error !== ke)
                                                            ) {
                                                                e.next = 6;
                                                                break;
                                                            }
                                                            return (
                                                                n(100),
                                                                i.push(R),
                                                                e.abrupt(
                                                                    "return"
                                                                )
                                                            );
                                                        case 6:
                                                            return (
                                                                n(50),
                                                                (e.next = 9),
                                                                s.user.authorizeFederated(
                                                                    o
                                                                )
                                                            );
                                                        case 9:
                                                            if (
                                                                ((t = e.sent),
                                                                (r = t.status),
                                                                (a =
                                                                    t.sessionIdentityResource) &&
                                                                    s.session.updateUserSession(
                                                                        a
                                                                    ),
                                                                r !== Ee)
                                                            ) {
                                                                e.next = 17;
                                                                break;
                                                            }
                                                            n(100),
                                                                t.nextUrl
                                                                    ? console.log(2,
                                                                          t.nextUrl
                                                                      )
                                                                    : (console.error(
                                                                          "Social login redirect failed"
                                                                      ),
                                                                      s.error.goError()),
                                                                (e.next = 19);
                                                            break;
                                                        case 17:
                                                            return (
                                                                (e.next = 19),
                                                                s.user.userCheckFlowURI(
                                                                    t
                                                                )
                                                            );
                                                        case 19:
                                                            e.next = 25;
                                                            break;
                                                        case 21:
                                                            (e.prev = 21),
                                                                (e.t0 =
                                                                    e.catch(0)),
                                                                (c =
                                                                    (e.t0 &&
                                                                        e.t0
                                                                            .response &&
                                                                        e.t0
                                                                            .response
                                                                            .data) ||
                                                                    {}) &&
                                                                c.status === Ke
                                                                    ? (s.user.update(
                                                                          ((u =
                                                                              {}),
                                                                          Object(
                                                                              b.a
                                                                          )(
                                                                              u,
                                                                              ae,
                                                                              c.email
                                                                          ),
                                                                          Object(
                                                                              b.a
                                                                          )(
                                                                              u,
                                                                              ne,
                                                                              c.familyName
                                                                          ),
                                                                          Object(
                                                                              b.a
                                                                          )(
                                                                              u,
                                                                              re,
                                                                              c.givenName
                                                                          ),
                                                                          u)
                                                                      ),
                                                                      n(100),
                                                                      i.push(
                                                                          M,
                                                                          {
                                                                              isExternalIdentity:
                                                                                  !0,
                                                                              provider:
                                                                                  c.provider,
                                                                          }
                                                                      ))
                                                                    : (n(100),
                                                                      c &&
                                                                      c.status ===
                                                                          Fe
                                                                          ? s.error.goError(
                                                                                {
                                                                                    message:
                                                                                        "Server Error",
                                                                                }
                                                                            )
                                                                          : s.error.goError());
                                                        case 25:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            null,
                                            [[0, 21]]
                                        );
                                    })
                                )).apply(this, arguments);
                            }
                            !(function () {
                                e.apply(this, arguments);
                            })();
                        }, []),
                        Object(gr.jsx)(Jn, {
                            value: r,
                            text: c("label.wait_msg"),
                        })
                    );
                },
                ta = function () {
                    var e = Object(Nr.a)().t;
                    return Object(gr.jsxs)("div", {
                        className: "flex--center",
                        children: [
                            Object(gr.jsx)(_r.LogoHp, {
                                id: "hp-logo",
                                name: "hp",
                                appearance: "multicolor",
                                size: 32,
                                css: { marginRight: "10px" },
                            }),
                            Object(gr.jsx)("span", {
                                children: e("label.footer_copyright", {
                                    YEAR: new Date().getFullYear(),
                                }),
                            }),
                        ],
                    });
                },
                ra = function () {
                    var e = Object(Nr.a)().t,
                        t = Object(l.e)(function (e) {
                            return e.user.locale;
                        }),
                        r = Object(l.d)(),
                        n = Object(a.useState)(!1),
                        c = Object(xr.a)(n, 2),
                        s = c[0],
                        o = c[1];
                    Object(a.useEffect)(
                        function () {
                            s || (document.body.style["overflow-y"] = "auto");
                        },
                        [s]
                    );
                    var i = {
                        title: e("label.supported_languages"),
                        closeButtonLabel: e("button.cancel"),
                        confirmButtonLabel: e("button.select"),
                    };
                    return Object(gr.jsxs)("div", {
                        className: "flex--center",
                        children: [
                            Object(gr.jsx)("a", {
                                tabIndex: 0,
                                id: "privacy",
                                href: e("link.privacy_url"),
                                onClick: function () {
                                    Tt.trackEvent(
                                        ee.EVENTS.HPID_OUTBOUND_LINK_CLICK,
                                        {
                                            linkPlacement: "footer",
                                            linkID: "privacy",
                                        }
                                    );
                                },
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: e("link.privacy"),
                            }),
                            Object(gr.jsx)(Pr, {
                                id: "language-selector-link",
                                onClick: function () {
                                    return o(!0);
                                },
                                onKeyDown: function (e) {
                                    "Enter" === e.key &&
                                        (e.preventDefault(), o(!0));
                                },
                                children: Object(qn.getLanguageByLocale)(t),
                            }),
                            Object(gr.jsx)(
                                qn.LanguageSelector,
                                Object(E.a)(
                                    {
                                        show: s,
                                        onClose: function () {
                                            return o(!1);
                                        },
                                        selectedLanguage: t,
                                        onConfirm: function (e) {
                                            return (function (e) {
                                                $t(e),
                                                    r.user.changeLanguage(e),
                                                    o(!1);
                                            })(e);
                                        },
                                    },
                                    i
                                )
                            ),
                        ],
                    });
                },
                na =
                    (r(1515),
                    function () {
                        return Object(gr.jsx)(_r.Footer, {
                            mainContent: {
                                leftArea: Object(gr.jsx)(ta, {}),
                                rightArea: Object(gr.jsx)(ra, {}),
                            },
                            appearance: "ultraminimal",
                        });
                    }),
                aa = function (e) {
                    var t = e.usernameType,
                        r = e.smsSupportedCountryNumbers,
                        n = Object(Nr.a)().t,
                        c = Object(l.d)(),
                        s = Object(l.e)(function (e) {
                            return e;
                        }).user,
                        o = Object(a.useState)(!1),
                        i = Object(xr.a)(o, 2),
                        u = i[0],
                        d = i[1],
                        b = Object(a.useState)(""),
                        p = Object(xr.a)(b, 2),
                        m = p[0],
                        f = p[1],
                        j = Object(a.useState)(s.country),
                        h = Object(xr.a)(j, 2),
                        O = h[0],
                        v = h[1],
                        x = Object(a.useState)(""),
                        _ = Object(xr.a)(x, 2),
                        g = _[0],
                        w = _[1],
                        k = {
                            usernameEmailName: s.username,
                            usernameMobileName: s.username,
                        },
                        S = Object(a.useState)(k),
                        C = Object(xr.a)(S, 2),
                        I = C[0],
                        P = C[1],
                        L = s[oe],
                        R = Object(Gr.useForm)({ defaultValues: k }),
                        T = R.register,
                        V = R.unregister,
                        U = R.handleSubmit,
                        A = R.formState,
                        D = R.clearError,
                        H = R.errors,
                        B = R.setError,
                        F = R.setValue,
                        z = R.triggerValidation,
                        q = Xr({
                            setStateValues: P,
                            values: I,
                            setValue: F,
                            formState: A,
                            errors: H,
                            clearError: D,
                            triggerValidation: z,
                        }),
                        K = q.onChangeHandler,
                        G = q.onBlurHandler,
                        Y = et.USERNAME,
                        W = "usernameEmailName",
                        Q = "usernameMobileName";
                    Object(a.useEffect)(function () {
                        s.username &&
                            s.username === s.loginHint &&
                            document.getElementById("".concat(Y)).focus();
                    }, []),
                        Object(a.useEffect)(
                            function () {
                                t === pt
                                    ? (V(W),
                                      T(
                                          { name: Q },
                                          {
                                              required:
                                                  "form.err_sms_number_invalid",
                                              validate: zt,
                                          }
                                      ))
                                    : (V(Q),
                                      T(
                                          { name: W },
                                          {
                                              required:
                                                  "form.err_username_empty",
                                          }
                                      ));
                            },
                            [t]
                        ),
                        Object(a.useEffect)(
                            function () {
                                f(
                                    s[de]
                                        ? n(
                                              "form.err_invalid_account_hide_create"
                                          )
                                        : Object(gr.jsxs)(yr.a, {
                                              i18nKey:
                                                  "form.err_account_not_found",
                                              children: [
                                                  "HP account not found, click ",
                                                  Object(gr.jsx)(Pr, {
                                                      to: M,
                                                      error: !0,
                                                      children: "here",
                                                  }),
                                                  " to create an account.",
                                              ],
                                          })
                                );
                            },
                            [s[de], n, t]
                        ),
                        Object(a.useEffect)(
                            function () {
                                !(function () {
                                    var e = Object(Ht.a)(
                                        I.usernameMobileName || ""
                                    );
                                    e && (v(e.country), w(e.nationalNumber));
                                })();
                            },
                            [I.usernameMobileName]
                        );
                    var $ = (function () {
                        var e = Object(y.a)(
                            N.a.mark(function e(t) {
                                var r, n, a, s;
                                return N.a.wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    d(!0),
                                                    t.usernameMobileName
                                                        ? ((r =
                                                              t.usernameMobileName),
                                                          (n = Q))
                                                        : ((r =
                                                              t.usernameEmailName),
                                                          (n = W)),
                                                    (s = {
                                                        options: (a = {
                                                            setLoading: d,
                                                            setError: B,
                                                            username: r,
                                                            formFieldName: n,
                                                        }),
                                                        submitSelector: Y,
                                                        callback:
                                                            c.user
                                                                .usernameFormCheckUsername,
                                                        onHide: function () {
                                                            return d(!1);
                                                        },
                                                        formErrors: H,
                                                    }),
                                                    (e.next = 6),
                                                    c.user.usernameFormCheckUsername(
                                                        {
                                                            options: Object(
                                                                E.a
                                                            )(
                                                                Object(E.a)(
                                                                    {},
                                                                    a
                                                                ),
                                                                {},
                                                                {
                                                                    arkoseParams:
                                                                        s,
                                                                }
                                                            ),
                                                        }
                                                    )
                                                );
                                            case 6:
                                            case "end":
                                                return e.stop();
                                        }
                                }, e);
                            })
                        );
                        return function (t) {
                            return e.apply(this, arguments);
                        };
                    })();
                    return Object(gr.jsxs)("form", {
                        className: "form-container",
                        onSubmit: U($),
                        children: [
                            t === pt
                                ? Object(gr.jsx)(Qn, {
                                      name: Q,
                                      className:
                                          "form-control label-alignment-ie",
                                      onChange: K(Q),
                                      onBlur: G(Q),
                                      countryNumbers: r,
                                      defaultIsoCode: O,
                                      defaultValue: g,
                                      locale: s.locale,
                                      error:
                                          H.usernameMobileName &&
                                          ("notMatch" ===
                                          H.usernameMobileName.type
                                              ? m
                                              : n(
                                                    H.usernameMobileName.message
                                                )),
                                  })
                                : Object(gr.jsx)(_r.TextBox, {
                                      id: "username",
                                      name: W,
                                      className: "form-control",
                                      value: I.usernameEmailName,
                                      onChange: K(W),
                                      onBlur: G(W),
                                      placeholder: n(
                                          "label.placeholder_username"
                                      ),
                                      error: !!H.usernameEmailName,
                                      helperText:
                                          H.usernameEmailName &&
                                          ("notMatch" ===
                                          H.usernameEmailName.type
                                              ? m
                                              : n(H.usernameEmailName.message)),
                                      autoCapitalize: "none",
                                      autoComplete: "off",
                                      autoFocus: !0,
                                      maxLength: 256,
                                  }),
                            Object(gr.jsx)("div", {
                                className: "next-btn",
                                children: Object(gr.jsx)(_r.Button, {
                                    name: "next",
                                    type: "submit",
                                    loading: u,
                                    expanded: !0,
                                    id: Y,
                                    children: n("button.next"),
                                }),
                            }),
                            L &&
                                Object(gr.jsx)("div", {
                                    className:
                                        "d-flex justify-content-center back-link",
                                    children: Object(gr.jsx)(tn, {
                                        bold: !0,
                                        onClick: function () {
                                            return c.user.redirectToAPP();
                                        },
                                        children: n("link.not_now"),
                                    }),
                                }),
                            s.showRememberMe &&
                                Object(gr.jsx)("div", {
                                    className: "remember-me",
                                    children: Object(gr.jsx)(_r.Checkbox, {
                                        id: "remember-me",
                                        name: "remember-me",
                                        label: n("label.remember_me"),
                                        checked: s.rememberMe,
                                        onChange: function () {
                                            c.user.update({
                                                rememberMe: !s.rememberMe,
                                            });
                                        },
                                    }),
                                }),
                        ],
                    });
                };
            aa.defaultProps = {
                usernameType: bt,
                smsSupportedCountryNumbers: [],
            };
            var ca = aa,
                sa =
                    (r(1516),
                    function () {
                        var e = Object(a.useState)(bt),
                            t = Object(xr.a)(e, 1)[0],
                            r = Object(Nr.a)().t,
                            n = Object(l.e)(function (e) {
                                return e.session;
                            }),
                            c = n.client,
                            s = n.smsSupportedCountryNumbers,
                            o = Object(l.e)(function (e) {
                                return e.loading;
                            }),
                            i = Object(l.d)(),
                            u = Object(d.f)();
                        return (
                            Object(a.useEffect)(
                                function () {
                                    !c[ge] ||
                                        (s && s.length) ||
                                        i.session.fetchSmsSupportedCountryNumbers();
                                },
                                [s, c[ge]]
                            ),
                            o.effects.session.fetchSessionInfo ||
                            o.effects.session.initSessionWithFlow
                                ? Object(gr.jsx)(qr, {})
                                : Object(gr.jsxs)(Jr, {
                                      children: [
                                          Object(gr.jsxs)(rn, {
                                              className: "username-panel",
                                              children: [
                                                  Object(gr.jsx)("p", {
                                                      children: r(
                                                          "label.username_connecting_to"
                                                      ),
                                                  }),
                                                  Object(gr.jsx)("h5", {
                                                      className: "client-name",
                                                      children:
                                                          c && c.displayName,
                                                  }),
                                                  c[ge] &&
                                                      Object(gr.jsxs)(
                                                          gr.Fragment,
                                                          {
                                                              children: [
                                                                  Object(
                                                                      gr.jsx
                                                                  )(ca, {
                                                                      usernameType:
                                                                          t,
                                                                      smsSupportedCountryNumbers:
                                                                          s,
                                                                  }),
                                                                  Object(
                                                                      gr.jsx
                                                                  )("div", {
                                                                      className:
                                                                          "d-flex forgot-credential",
                                                                      children:
                                                                          Object(
                                                                              gr.jsx
                                                                          )(
                                                                              Pr,
                                                                              {
                                                                                  id: "forgot-cred",
                                                                                  onClick:
                                                                                      function () {
                                                                                          return (
                                                                                              i.user.update(
                                                                                                  Object(
                                                                                                      b.a
                                                                                                  )(
                                                                                                      {},
                                                                                                      he,
                                                                                                      !1
                                                                                                  )
                                                                                              ),
                                                                                              void u.push(
                                                                                                  F
                                                                                              )
                                                                                          );
                                                                                      },
                                                                                  children:
                                                                                      r(
                                                                                          "link.forgot_credentials"
                                                                                      ),
                                                                              }
                                                                          ),
                                                                  }),
                                                              ],
                                                          }
                                                      ),
                                                  Object(gr.jsx)(An, {}),
                                              ],
                                          }),
                                          Object(gr.jsx)(en, {}),
                                      ],
                                  })
                        );
                    }),
                oa = function (e) {
                    var t = e.children,
                        r = new URLSearchParams(Object(d.g)().search),
                        n = Object(d.g)(),
                        c = Object(l.d)(),
                        s = Object(l.e)(function (e) {
                            return e.user;
                        }),
                        o = s[me],
                        i = s[pe],
                        u = s.locale;
                    return (
                        Object(a.useEffect)(
                            function () {
                                c.user.changeLanguage();
                            },
                            [u]
                        ),
                        Object(a.useLayoutEffect)(function () {
                            ((r.has(me) && r.get(me) !== o) ||
                                (r.has(pe) && r.get(pe) !== i)) &&
                                c({ type: _e });
                        }, []),
                        Object(a.useEffect)(function () {
                            -1 !== [Z, W].indexOf(n.pathname) &&
                                Tt.trackPageView();
                        }, []),
                        t
                    );
                },
                ia =
                    (r(1517),
                    function () {
                        var e = Object(d.f)(),
                            t = Object(Nr.a)().t;
                        return Object(gr.jsxs)(Jr, {
                            title: t("label.recovery_header_title"),
                            children: [
                                Object(gr.jsx)(rn, {
                                    className: "email-sent-panel",
                                    children: Object(gr.jsxs)("div", {
                                        className: "text-center",
                                        children: [
                                            Object(gr.jsx)(_r.IconEnvelope, {
                                                size: 72,
                                            }),
                                            Object(gr.jsx)("p", {
                                                className:
                                                    "recovery-username-success",
                                                children: t(
                                                    "label.recovery_username_success"
                                                ),
                                            }),
                                            Object(gr.jsx)("div", {
                                                className: "skip-wait",
                                                children: Object(gr.jsx)(Pr, {
                                                    to: R,
                                                    onClick: function () {
                                                        return e.push(R);
                                                    },
                                                    children:
                                                        t("link.go_to_signin"),
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                Object(gr.jsx)("div", {
                                    className: "d-flex justify-content-center",
                                    children: Object(gr.jsx)(en, {}),
                                }),
                            ],
                        });
                    }),
                ua = r(111),
                la = r.n(ua),
                da = function () {
                    var e = Object(l.d)(),
                        t = Object(Nr.a)().t,
                        r = Object(l.e)(function (e) {
                            return e.session.client;
                        }).displayName,
                        n = Object(l.e)(function (e) {
                            return e.session.startTime;
                        }),
                        c = Object(l.e)(function (e) {
                            return e.session.warned;
                        }),
                        s = Object(xr.a)(Ot.session_timeout, 2),
                        o = s[0],
                        i = s[1],
                        u = Object(a.useState)(la()(n).add(o - 1, i)),
                        d = Object(xr.a)(u, 2),
                        b = d[0],
                        p = d[1],
                        m = Object(a.useState)(!1),
                        f = Object(xr.a)(m, 2),
                        j = f[0],
                        h = f[1],
                        O = Object(a.useState)(),
                        v = Object(xr.a)(O, 2),
                        x = v[0],
                        _ = v[1],
                        g = Object(a.useState)(),
                        w = Object(xr.a)(g, 2),
                        k = w[0],
                        N = w[1],
                        y = Object(a.useState)(
                            t("label.modal_session_expiring_title")
                        ),
                        E = Object(xr.a)(y, 2),
                        S = E[0],
                        C = E[1],
                        I = Object(a.useState)(),
                        P = Object(xr.a)(I, 2),
                        L = P[0],
                        R = P[1],
                        T = Object(a.useState)(),
                        V = Object(xr.a)(T, 2),
                        U = V[0],
                        A = V[1],
                        M = Object(a.useState)(),
                        D = Object(xr.a)(M, 2),
                        H = D[0],
                        B = D[1];
                    Object(a.useLayoutEffect)(function () {
                        if (!n) {
                            var t = la()();
                            e.session.update({ startTime: t });
                        }
                    }, []),
                        Object(a.useLayoutEffect)(
                            function () {
                                n && p(la()(n).add(o - 1, i));
                            },
                            [n]
                        ),
                        Object(a.useEffect)(
                            function () {
                                var e = b.diff(la()());
                                e && b && !c && setTimeout(q, e - 3e5);
                            },
                            [b, c]
                        ),
                        Object(a.useEffect)(
                            function () {
                                H && clearInterval(x);
                            },
                            [H]
                        ),
                        Object(a.useEffect)(
                            function () {
                                var e = b.diff(la()());
                                c && (clearInterval(x), setTimeout(G, e));
                            },
                            [c]
                        );
                    var F = function () {
                            h(!1);
                        },
                        z = function () {
                            e.user.redirectToAPP(),
                                setTimeout(function () {
                                    h(!1);
                                }, 500);
                        },
                        q = function () {
                            var r = b.diff(la()(), "seconds");
                            e.session.update({ warned: !0 }),
                                N(t("button.close")),
                                A(
                                    Object(gr.jsx)(yr.a, {
                                        i18nKey:
                                            "label.modal_session_expiring_msg",
                                        children: K(r),
                                    })
                                ),
                                h(!0),
                                R(function () {
                                    return F;
                                });
                            var n = setInterval(Y, 1e3);
                            _(n);
                        },
                        K = function (e) {
                            var t = Math.floor(e / 60),
                                r = (e % 60) % 60;
                            return ""
                                .concat(t < 1 ? "0" + t : t, ":")
                                .concat(r < 10 ? "0" + r : r);
                        },
                        G = function () {
                            h(!0),
                                Tt.trackEvent(
                                    ee.EVENTS.HPID_SESSION_MONITORING_TIMEOUT
                                ),
                                A(
                                    Object(gr.jsxs)("div", {
                                        className: Cr()(
                                            "d-flex",
                                            "flex-column--center"
                                        ),
                                        children: [
                                            Object(gr.jsx)("div", {
                                                children: t(
                                                    "label.modal_session_expired_msg",
                                                    { APPNAME: r }
                                                ),
                                            }),
                                            Object(gr.jsx)(
                                                _r.ProgressIndicator,
                                                {}
                                            ),
                                        ],
                                    })
                                ),
                                N(t("label.recovery_skip_wait")),
                                C(t("label.modal_session_expired_title")),
                                R(function () {
                                    return z;
                                }),
                                setTimeout(function () {
                                    z();
                                }, 5e3);
                        },
                        Y = function () {
                            var e = b.diff(la()(), "seconds");
                            e > 0
                                ? A(
                                      Object(gr.jsx)(yr.a, {
                                          i18nKey:
                                              "label.modal_session_expiring_msg",
                                          children: K(e),
                                      })
                                  )
                                : B(!0);
                        };
                    return Object(gr.jsx)("div", {
                        className: "modal-align-wrapper",
                        children: Object(gr.jsx)(_r.Modal, {
                            title: Object(gr.jsxs)("div", {
                                className: "d-flex flex--center",
                                children: [
                                    Object(gr.jsx)(_r.IconWarning, {
                                        name: "warning",
                                        css: { marginRight: "1em" },
                                        size: 48,
                                    }),
                                    S,
                                ],
                            }),
                            show: j,
                            onClose: L,
                            align: "center",
                            portal: !1,
                            footer: Object(gr.jsx)("div", {
                                className: "vn-button-group--responsive",
                                children: Object(gr.jsx)(_r.Button, {
                                    onClick: L,
                                    children: k,
                                }),
                            }),
                            children: Object(gr.jsx)("span", { children: U }),
                        }),
                    });
                },
                ba =
                    (r(1518),
                    function () {
                        var e = Object(Nr.a)().t,
                            t = Object(d.f)(),
                            r = Object(l.d)(),
                            n = Object(l.e)(function (e) {
                                return e;
                            }).user,
                            c = { code: "" },
                            s = Object(a.useState)(c),
                            o = Object(xr.a)(s, 2),
                            i = o[0],
                            u = o[1],
                            b = Object(a.useState)(!1),
                            p = Object(xr.a)(b, 2),
                            m = p[0],
                            f = p[1],
                            j = Object(a.useState)(""),
                            h = Object(xr.a)(j, 2),
                            O = h[0],
                            v = h[1],
                            x = Object(Gr.useForm)({ defaultValues: c }),
                            _ = x.register,
                            g = x.handleSubmit,
                            w = x.formState,
                            k = x.clearError,
                            S = x.errors,
                            C = x.setError,
                            I = x.setValue,
                            P = x.triggerValidation,
                            L = Object(a.useState)(!0),
                            R = Object(xr.a)(L, 2),
                            T = R[0],
                            V = R[1],
                            U = Object(a.useState)(!1),
                            A = Object(xr.a)(U, 2),
                            M = A[0],
                            B = A[1],
                            F = Object(a.useState)(!1),
                            z = Object(xr.a)(F, 2),
                            q = z[0],
                            K = z[1],
                            G = Xr({
                                setStateValues: u,
                                values: i,
                                setValue: I,
                                formState: w,
                                errors: S,
                                clearError: k,
                                triggerValidation: P,
                            }),
                            Y = G.onChangeHandler,
                            W = G.onBlurHandler,
                            Q = ct.SUBMIT_CODE,
                            $ = ct.SUBMIT_CODE_BY_EMAIL,
                            Z = ct.RESEND_CODE;
                        Object(a.useEffect)(function () {
                            _(
                                { name: "code" },
                                {
                                    required: "form.err_code_empty",
                                    pattern: {
                                        value: Ot.verificationCodeRegex,
                                        message: "form.err_invalid_email_code",
                                    },
                                }
                            ),
                                (function (e) {
                                    var t = e.inputChange,
                                        r = e.formSubmit;
                                    if ("OTPCredential" in window) {
                                        var n = document.querySelector(
                                            'input[autocomplete="one-time-code"]'
                                        );
                                        if (!n || !t || !r) return;
                                        var a = new AbortController(),
                                            c = n.closest("form");
                                        c &&
                                            c.addEventListener(
                                                "submit",
                                                function (e) {
                                                    a.abort();
                                                }
                                            ),
                                            navigator.credentials
                                                .get({
                                                    otp: { transport: ["sms"] },
                                                    signal: a.signal,
                                                })
                                                .then(function (e) {
                                                    t(e.code), c && r();
                                                })
                                                .catch(function (e) {
                                                    console.warn(
                                                        "OTP Promise error: ",
                                                        e
                                                    );
                                                });
                                    }
                                })({
                                    inputChange: function (e) {
                                        Y("code")(e);
                                    },
                                    formSubmit: g(te),
                                });
                        }, []);
                        var X = (function () {
                                var e = Object(y.a)(
                                    N.a.mark(function e(n) {
                                        var a;
                                        return N.a.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                (K(!0),
                                                                (a =
                                                                    n.captcha) ||
                                                                    !m)
                                                            ) {
                                                                e.next = 6;
                                                                break;
                                                            }
                                                            r.arkose.handleArkose(
                                                                {
                                                                    callback: J,
                                                                    submitSelector:
                                                                        $,
                                                                    onHide: function () {
                                                                        return K(
                                                                            !1
                                                                        );
                                                                    },
                                                                }
                                                            ),
                                                                (e.next = 17);
                                                            break;
                                                        case 6:
                                                            return (
                                                                (e.prev = 6),
                                                                (e.next = 9),
                                                                r.user.requestCode(
                                                                    a
                                                                )
                                                            );
                                                        case 9:
                                                            return (
                                                                Tt.trackEvent(
                                                                    ee.EVENTS
                                                                        .HPID_VERIFY_EMAIL_REQ,
                                                                    {
                                                                        formName:
                                                                            "VERIFY_EMAIL_SIGN_IN",
                                                                    }
                                                                ),
                                                                e.abrupt(
                                                                    "return",
                                                                    t.push(D)
                                                                )
                                                            );
                                                        case 13:
                                                            (e.prev = 13),
                                                                (e.t0 =
                                                                    e.catch(6)),
                                                                K(!1),
                                                                e.t0.response &&
                                                                e.t0.response
                                                                    .data
                                                                    .error ===
                                                                    De
                                                                    ? (K(!0),
                                                                      f(!0),
                                                                      r.arkose.handleArkose(
                                                                          {
                                                                              callback:
                                                                                  J,
                                                                              submitSelector:
                                                                                  $,
                                                                              onHide: function () {
                                                                                  return K(
                                                                                      !1
                                                                                  );
                                                                              },
                                                                          }
                                                                      ))
                                                                    : C(
                                                                          "code",
                                                                          "invalidCode",
                                                                          "form.err_invalid_email_code"
                                                                      );
                                                        case 17:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            null,
                                            [[6, 13]]
                                        );
                                    })
                                );
                                return function (t) {
                                    return e.apply(this, arguments);
                                };
                            })(),
                            J = function (e) {
                                var t = {
                                    captcha: { data: e.token, type: it },
                                };
                                X(t);
                            },
                            te = (function () {
                                var e = Object(y.a)(
                                    N.a.mark(function e(n) {
                                        var a, c;
                                        return N.a.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                ((a =
                                                                    n.captcha),
                                                                B(!0),
                                                                a || !m)
                                                            ) {
                                                                e.next = 6;
                                                                break;
                                                            }
                                                            r.arkose.handleArkose(
                                                                {
                                                                    callback:
                                                                        re,
                                                                    submitSelector:
                                                                        Q,
                                                                    onHide: function () {
                                                                        return B(
                                                                            !1
                                                                        );
                                                                    },
                                                                    formErrors:
                                                                        S,
                                                                }
                                                            ),
                                                                (e.next = 24);
                                                            break;
                                                        case 6:
                                                            return (
                                                                (e.prev = 6),
                                                                (e.next = 9),
                                                                r.user.verifySMSCode(
                                                                    n
                                                                )
                                                            );
                                                        case 9:
                                                            if (
                                                                !(c = e.sent)
                                                                    .nextUrl
                                                            ) {
                                                                e.next = 15;
                                                                break;
                                                            }
                                                            Tt.trackEvent(
                                                                ee.EVENTS
                                                                    .HPID_VERIFY_PHONE_SUCCESS
                                                            ),
                                                                t.push(H, {
                                                                    redirectURL:
                                                                        c.nextUrl,
                                                                    context: Ne,
                                                                }),
                                                                (e.next = 17);
                                                            break;
                                                        case 15:
                                                            return (
                                                                (e.next = 17),
                                                                r.user.userCheckFlowURI(
                                                                    c
                                                                )
                                                            );
                                                        case 17:
                                                            e.next = 24;
                                                            break;
                                                        case 19:
                                                            (e.prev = 19),
                                                                (e.t0 =
                                                                    e.catch(6)),
                                                                B(!1),
                                                                e.t0.response
                                                                    .data
                                                                    .error ===
                                                                Ve
                                                                    ? (Tt.trackEvent(
                                                                          ee
                                                                              .EVENTS
                                                                              .HPID_INVALID_CODE,
                                                                          {
                                                                              formName:
                                                                                  "PHONE_VERIFICATION",
                                                                          }
                                                                      ),
                                                                      C(
                                                                          "code",
                                                                          "invalidCode",
                                                                          "form.err_invalid_email_code"
                                                                      ))
                                                                    : e.t0
                                                                          .response &&
                                                                      e.t0
                                                                          .response
                                                                          .data
                                                                          .error ===
                                                                          De
                                                                    ? (f(!0),
                                                                      r.arkose.handleArkose(
                                                                          {
                                                                              callback:
                                                                                  re,
                                                                              submitSelector:
                                                                                  Q,
                                                                              onHide: function () {
                                                                                  return B(
                                                                                      !1
                                                                                  );
                                                                              },
                                                                              formErrors:
                                                                                  S,
                                                                          }
                                                                      ))
                                                                    : C(
                                                                          "code",
                                                                          "invalidCode",
                                                                          "form.err_invalid_email_code"
                                                                      );
                                                        case 24:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            null,
                                            [[6, 19]]
                                        );
                                    })
                                );
                                return function (t) {
                                    return e.apply(this, arguments);
                                };
                            })(),
                            re = function (e) {
                                var t = { data: e.token, type: it };
                                te(
                                    Object(E.a)(
                                        Object(E.a)({}, i),
                                        {},
                                        { captcha: t }
                                    )
                                );
                            },
                            ne = (function () {
                                var e = Object(y.a)(
                                    N.a.mark(function e() {
                                        var t, n;
                                        return N.a.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            v(""),
                                                            V(!1),
                                                            (t = {
                                                                setResendCode:
                                                                    v,
                                                                setShowResend:
                                                                    V,
                                                                setError: C,
                                                            }),
                                                            (n = {
                                                                callback:
                                                                    r
                                                                        .codeVerification
                                                                        .resendSMSCode,
                                                                submitSelector:
                                                                    Z,
                                                                onHide: function () {
                                                                    return V(
                                                                        !0
                                                                    );
                                                                },
                                                                options: t,
                                                            }),
                                                            (e.next = 6),
                                                            r.codeVerification.resendSMSCode(
                                                                {
                                                                    options:
                                                                        Object(
                                                                            E.a
                                                                        )(
                                                                            Object(
                                                                                E.a
                                                                            )(
                                                                                {},
                                                                                t
                                                                            ),
                                                                            {},
                                                                            {
                                                                                arkoseParams:
                                                                                    n,
                                                                            }
                                                                        ),
                                                                }
                                                            )
                                                        );
                                                    case 6:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                );
                                return function () {
                                    return e.apply(this, arguments);
                                };
                            })();
                        return Object(gr.jsx)(Jr, {
                            title: e("label.sms_title_edit", {
                                PHONE: n.phoneNumber,
                            }),
                            children: Object(gr.jsxs)(rn, {
                                className: "sms-verification",
                                children: [
                                    Object(gr.jsxs)("div", {
                                        className: "sms-header",
                                        children: [
                                            Object(gr.jsx)(_r.IconMobile, {
                                                size: 72,
                                            }),
                                            Object(gr.jsx)("p", {
                                                children: e(
                                                    "label.sms_desc_edit",
                                                    { PHONE: n.phoneNumber }
                                                ),
                                            }),
                                        ],
                                    }),
                                    Object(gr.jsxs)(gr.Fragment, {
                                        children: [
                                            Object(gr.jsxs)("form", {
                                                className: "form-container",
                                                onSubmit: g(te),
                                                children: [
                                                    Object(gr.jsx)(_r.TextBox, {
                                                        id: "code",
                                                        name: "code",
                                                        className:
                                                            "form-control input-uppercase",
                                                        value: i.code,
                                                        onChange: Y("code"),
                                                        onBlur: W("code"),
                                                        placeholder: e(
                                                            "label.email_code_placeholder"
                                                        ),
                                                        error: !!S.code,
                                                        helperText:
                                                            S.code &&
                                                            e(S.code.message),
                                                        autoCapitalize: "none",
                                                        autoFocus: !0,
                                                        autoComplete:
                                                            "one-time-code",
                                                        maxLength: 256,
                                                    }),
                                                    Object(gr.jsx)("div", {
                                                        className:
                                                            "margin-default",
                                                        children: Object(
                                                            gr.jsx
                                                        )(_r.Button, {
                                                            id: Q,
                                                            name: Q,
                                                            type: "submit",
                                                            loading: M,
                                                            disabled: q,
                                                            expanded: !0,
                                                            children:
                                                                e(
                                                                    "button.verify"
                                                                ),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            Object(gr.jsxs)("div", {
                                                className: "margin-default",
                                                children: [
                                                    !(
                                                        !n.phoneNumber ||
                                                        !n.email
                                                    ) &&
                                                        Object(gr.jsx)(
                                                            _r.Button,
                                                            {
                                                                id: $,
                                                                name: $,
                                                                appearance:
                                                                    "secondary",
                                                                loading: q,
                                                                disabled: M,
                                                                onClick: X,
                                                                expanded: !0,
                                                                children: e(
                                                                    "button.verify_by_email"
                                                                ),
                                                            }
                                                        ),
                                                    Object(gr.jsxs)("div", {
                                                        className:
                                                            "request-code",
                                                        children: [
                                                            Object(gr.jsx)(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "row justify-content-center margin-default",
                                                                    children: T
                                                                        ? Object(
                                                                              gr.jsxs
                                                                          )(
                                                                              Pr,
                                                                              {
                                                                                  id: Z,
                                                                                  onClick:
                                                                                      ne,
                                                                                  children:
                                                                                      [
                                                                                          " ",
                                                                                          e(
                                                                                              "label.email_resend_code"
                                                                                          ),
                                                                                          " ",
                                                                                      ],
                                                                              }
                                                                          )
                                                                        : Object(
                                                                              gr.jsx
                                                                          )(
                                                                              _r.ProgressIndicator,
                                                                              {}
                                                                          ),
                                                                }
                                                            ),
                                                            Object(gr.jsx)(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "hide-notification-button",
                                                                    children:
                                                                        O &&
                                                                        Object(
                                                                            gr.jsx
                                                                        )(
                                                                            _r.InlineNotification,
                                                                            {
                                                                                title: e(
                                                                                    "label.email_resend_to",
                                                                                    {
                                                                                        EMAIL: O,
                                                                                    }
                                                                                ),
                                                                                type: "positive",
                                                                            }
                                                                        ),
                                                                }
                                                            ),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        });
                    }),
                pa =
                    (r(1519),
                    function () {
                        var e = Object(Nr.a)().t,
                            t = Object(d.f)(),
                            r = Object(l.d)(),
                            n = Object(l.e)(function (e) {
                                return e;
                            }),
                            c = n.user,
                            s = n.codeVerification,
                            o = { emailInput: c.email },
                            i = Object(a.useState)(o),
                            u = Object(xr.a)(i, 2),
                            b = u[0],
                            p = u[1],
                            m = Object(Gr.useForm)({ defaultValues: o }),
                            f = m.register,
                            j = m.handleSubmit,
                            h = m.formState,
                            O = m.clearError,
                            v = m.errors,
                            x = m.setError,
                            _ = m.setValue,
                            g = m.triggerValidation,
                            w = Xr({
                                setStateValues: p,
                                values: b,
                                setValue: _,
                                formState: h,
                                errors: v,
                                clearError: O,
                                triggerValidation: g,
                            }),
                            k = w.onChangeHandler,
                            E = w.onBlurHandler,
                            S = "link.edit_email",
                            C = "label.change_primary_email",
                            I = "label.placeholder_email",
                            P = "button.next",
                            L = "link.back_link",
                            R = "form.err_email_empty",
                            T = "form.err_email_invalid",
                            V = "form.err_unique_username",
                            U = nt.EDIT_EMAIL_BUTTON;
                        Object(a.useEffect)(function () {
                            f(
                                { name: "emailInput" },
                                {
                                    required: R,
                                    pattern: {
                                        value: Ot.emailRegex,
                                        message: T,
                                    },
                                }
                            );
                        });
                        var A = (function () {
                            var e = Object(y.a)(
                                N.a.mark(function e(t) {
                                    var n, a, c;
                                    return N.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (n = t.emailInput),
                                                        r.user.update({
                                                            isEditEmailLoading:
                                                                !0,
                                                        }),
                                                        (c = {
                                                            submitSelector: U,
                                                            callback: (a =
                                                                (function () {
                                                                    var e =
                                                                        Object(
                                                                            y.a
                                                                        )(
                                                                            N.a.mark(
                                                                                function e(
                                                                                    t
                                                                                ) {
                                                                                    var n,
                                                                                        a,
                                                                                        c,
                                                                                        s,
                                                                                        o,
                                                                                        i,
                                                                                        u,
                                                                                        l,
                                                                                        d;
                                                                                    return N.a.wrap(
                                                                                        function (
                                                                                            e
                                                                                        ) {
                                                                                            for (;;)
                                                                                                switch (
                                                                                                    (e.prev =
                                                                                                        e.next)
                                                                                                ) {
                                                                                                    case 0:
                                                                                                        return (
                                                                                                            (n =
                                                                                                                t.token),
                                                                                                            (a =
                                                                                                                t.options),
                                                                                                            (c =
                                                                                                                n && {
                                                                                                                    data: n,
                                                                                                                    type: it,
                                                                                                                }),
                                                                                                            (s =
                                                                                                                a &&
                                                                                                                a.email.trim()),
                                                                                                            (o =
                                                                                                                {
                                                                                                                    captcha:
                                                                                                                        c,
                                                                                                                    email: s,
                                                                                                                }),
                                                                                                            (e.prev = 4),
                                                                                                            (e.next = 7),
                                                                                                            r.user.changePrimaryEmail(
                                                                                                                o
                                                                                                            )
                                                                                                        );
                                                                                                    case 7:
                                                                                                        (i =
                                                                                                            e.sent),
                                                                                                            r.user.update(
                                                                                                                {
                                                                                                                    username:
                                                                                                                        i.email,
                                                                                                                    email: i.email,
                                                                                                                }
                                                                                                            ),
                                                                                                            r.user.update(
                                                                                                                {
                                                                                                                    isEditEmailLoading:
                                                                                                                        !1,
                                                                                                                }
                                                                                                            ),
                                                                                                            (u =
                                                                                                                "success" ===
                                                                                                                i.sendCode),
                                                                                                            r(
                                                                                                                u
                                                                                                                    ? Object(
                                                                                                                          Et.e
                                                                                                                      )(
                                                                                                                          D
                                                                                                                      )
                                                                                                                    : Object(
                                                                                                                          Et.e
                                                                                                                      )(
                                                                                                                          B,
                                                                                                                          {
                                                                                                                              context:
                                                                                                                                  ye,
                                                                                                                          }
                                                                                                                      )
                                                                                                            ),
                                                                                                            (e.next = 24);
                                                                                                        break;
                                                                                                    case 14:
                                                                                                        if (
                                                                                                            ((e.prev = 14),
                                                                                                            (e.t0 =
                                                                                                                e.catch(
                                                                                                                    4
                                                                                                                )),
                                                                                                            (l =
                                                                                                                e
                                                                                                                    .t0
                                                                                                                    .response &&
                                                                                                                e
                                                                                                                    .t0
                                                                                                                    .response
                                                                                                                    .data
                                                                                                                    .error) !==
                                                                                                                De)
                                                                                                        ) {
                                                                                                            e.next = 23;
                                                                                                            break;
                                                                                                        }
                                                                                                        return (
                                                                                                            (d =
                                                                                                                a &&
                                                                                                                a.arkoseParams),
                                                                                                            (e.next = 21),
                                                                                                            r.arkose.handleArkose(
                                                                                                                d
                                                                                                            )
                                                                                                        );
                                                                                                    case 21:
                                                                                                        e.next = 24;
                                                                                                        break;
                                                                                                    case 23:
                                                                                                        l ===
                                                                                                        Ge
                                                                                                            ? (x(
                                                                                                                  "emailInput",
                                                                                                                  "",
                                                                                                                  V
                                                                                                              ),
                                                                                                              r.user.update(
                                                                                                                  {
                                                                                                                      isEditEmailLoading:
                                                                                                                          !1,
                                                                                                                  }
                                                                                                              ))
                                                                                                            : (r.error.goError(),
                                                                                                              r.user.update(
                                                                                                                  {
                                                                                                                      isEditEmailLoading:
                                                                                                                          !1,
                                                                                                                  }
                                                                                                              ));
                                                                                                    case 24:
                                                                                                    case "end":
                                                                                                        return e.stop();
                                                                                                }
                                                                                        },
                                                                                        e,
                                                                                        null,
                                                                                        [
                                                                                            [
                                                                                                4,
                                                                                                14,
                                                                                            ],
                                                                                        ]
                                                                                    );
                                                                                }
                                                                            )
                                                                        );
                                                                    return function (
                                                                        t
                                                                    ) {
                                                                        return e.apply(
                                                                            this,
                                                                            arguments
                                                                        );
                                                                    };
                                                                })()),
                                                            options: {
                                                                email: n,
                                                            },
                                                        }),
                                                        (e.next = 7),
                                                        a({
                                                            options: {
                                                                email: n,
                                                                arkoseParams: c,
                                                            },
                                                        })
                                                    );
                                                case 7:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function (t) {
                                return e.apply(this, arguments);
                            };
                        })();
                        return Object(gr.jsx)(Jr, {
                            title: e(S),
                            children: Object(gr.jsxs)(rn, {
                                className: "edit-email",
                                children: [
                                    Object(gr.jsxs)("div", {
                                        className: "edit-email-header",
                                        children: [
                                            Object(gr.jsx)(_r.IconEnvelope, {
                                                size: 72,
                                            }),
                                            Object(gr.jsx)("p", {
                                                children: e(C),
                                            }),
                                        ],
                                    }),
                                    Object(gr.jsxs)("form", {
                                        className: "form-container",
                                        onSubmit: j(A),
                                        children: [
                                            Object(gr.jsx)(_r.TextBox, {
                                                id: "emailInput",
                                                name: "emailInput",
                                                className: "form-control",
                                                value: b.emailInput,
                                                onChange: k("emailInput"),
                                                onBlur: E("emailInput"),
                                                placeholder: e(I),
                                                error: !!v.emailInput,
                                                helperText:
                                                    v.emailInput &&
                                                    e(v.emailInput.message),
                                                autoCapitalize: "none",
                                                autoComplete: "off",
                                                autoFocus: !0,
                                                maxLength: 256,
                                            }),
                                            Object(gr.jsx)("div", {
                                                className: "next-btn",
                                                children: Object(gr.jsx)(
                                                    _r.Button,
                                                    {
                                                        id: U,
                                                        name: U,
                                                        type: "submit",
                                                        loading:
                                                            c.isEditEmailLoading ||
                                                            s.isLoadingSendEmail,
                                                        expanded: !0,
                                                        children: e(P),
                                                    }
                                                ),
                                            }),
                                        ],
                                    }),
                                    Object(gr.jsx)("div", {
                                        className:
                                            "d-flex justify-content-center",
                                        children: Object(gr.jsx)(tn, {
                                            onClick: function () {
                                                return t.goBack();
                                            },
                                            children: e(L),
                                        }),
                                    }),
                                ],
                            }),
                        });
                    }),
                ma =
                    (r(1520),
                    function () {
                        return Object(gr.jsx)(l.a, {
                            store: Or,
                            children: Object(gr.jsx)(u.a, {
                                loading: Object(gr.jsx)(qr, {}),
                                persistor: vr,
                                children: Object(gr.jsx)(i.a, {
                                    history: mr,
                                    children: Object(gr.jsx)(oa, {
                                        children: Object(gr.jsx)(Rn, {
                                            children: Object(gr.jsxs)(
                                                a.Suspense,
                                                {
                                                    fallback: Object(gr.jsx)(
                                                        qr,
                                                        {}
                                                    ),
                                                    children: [
                                                        Object(gr.jsxs)(d.c, {
                                                            children: [
                                                                Object(gr.jsx)(
                                                                    d.a,
                                                                    {
                                                                        path: W,
                                                                        component:
                                                                            wn,
                                                                        exact: !0,
                                                                    }
                                                                ),
                                                                Object(gr.jsx)(
                                                                    d.a,
                                                                    {
                                                                        path: Z,
                                                                        component:
                                                                            yn,
                                                                        exact: !0,
                                                                    }
                                                                ),
                                                                Object(gr.jsx)(
                                                                    d.a,
                                                                    {
                                                                        children:
                                                                            Object(
                                                                                gr.jsxs
                                                                            )(
                                                                                In,
                                                                                {
                                                                                    children:
                                                                                        [
                                                                                            Object(
                                                                                                gr.jsxs
                                                                                            )(
                                                                                                d.c,
                                                                                                {
                                                                                                    children:
                                                                                                        [
                                                                                                            Object(
                                                                                                                gr.jsx
                                                                                                            )(
                                                                                                                d.a,
                                                                                                                {
                                                                                                                    path: R,
                                                                                                                    component:
                                                                                                                        sa,
                                                                                                                    exact: !0,
                                                                                                                }
                                                                                                            ),
                                                                                                            Object(
                                                                                                                gr.jsx
                                                                                                            )(
                                                                                                                d.a,
                                                                                                                {
                                                                                                                    path: U,
                                                                                                                    component:
                                                                                                                        hn,
                                                                                                                }
                                                                                                            ),
                                                                                                            Object(
                                                                                                                gr.jsx
                                                                                                            )(
                                                                                                                d.a,
                                                                                                                {
                                                                                                                    path: A,
                                                                                                                    component:
                                                                                                                        Bn,
                                                                                                                }
                                                                                                            ),
                                                                                                            Object(
                                                                                                                gr.jsx
                                                                                                            )(
                                                                                                                d.a,
                                                                                                                {
                                                                                                                    path: T,
                                                                                                                    component:
                                                                                                                        Mn,
                                                                                                                }
                                                                                                            ),
                                                                                                            Object(
                                                                                                                gr.jsx
                                                                                                            )(
                                                                                                                d.a,
                                                                                                                {
                                                                                                                    path: V,
                                                                                                                    component:
                                                                                                                        an,
                                                                                                                }
                                                                                                            ),
                                                                                                            Object(
                                                                                                                gr.jsx
                                                                                                            )(
                                                                                                                d.a,
                                                                                                                {
                                                                                                                    path: M,
                                                                                                                    component:
                                                                                                                        Xn,
                                                                                                                }
                                                                                                            ),
                                                                                                            Object(
                                                                                                                gr.jsx
                                                                                                            )(
                                                                                                                d.a,
                                                                                                                {
                                                                                                                    path: D,
                                                                                                                    component:
                                                                                                                        xn,
                                                                                                                }
                                                                                                            ),
                                                                                                            Object(
                                                                                                                gr.jsx
                                                                                                            )(
                                                                                                                d.a,
                                                                                                                {
                                                                                                                    path: H,
                                                                                                                    component:
                                                                                                                        _n,
                                                                                                                }
                                                                                                            ),
                                                                                                            Object(
                                                                                                                gr.jsx
                                                                                                            )(
                                                                                                                d.a,
                                                                                                                {
                                                                                                                    path: B,
                                                                                                                    component:
                                                                                                                        vn,
                                                                                                                }
                                                                                                            ),
                                                                                                            Object(
                                                                                                                gr.jsx
                                                                                                            )(
                                                                                                                d.a,
                                                                                                                {
                                                                                                                    path: F,
                                                                                                                    component:
                                                                                                                        nn,
                                                                                                                    exact: !0,
                                                                                                                }
                                                                                                            ),
                                                                                                            Object(
                                                                                                                gr.jsx
                                                                                                            )(
                                                                                                                d.a,
                                                                                                                {
                                                                                                                    path: z,
                                                                                                                    component:
                                                                                                                        Dn,
                                                                                                                }
                                                                                                            ),
                                                                                                            Object(
                                                                                                                gr.jsx
                                                                                                            )(
                                                                                                                d.a,
                                                                                                                {
                                                                                                                    path: q,
                                                                                                                    component:
                                                                                                                        Hn,
                                                                                                                }
                                                                                                            ),
                                                                                                            Object(
                                                                                                                gr.jsx
                                                                                                            )(
                                                                                                                d.a,
                                                                                                                {
                                                                                                                    path: K,
                                                                                                                    component:
                                                                                                                        ba,
                                                                                                                }
                                                                                                            ),
                                                                                                            Object(
                                                                                                                gr.jsx
                                                                                                            )(
                                                                                                                d.a,
                                                                                                                {
                                                                                                                    path: G,
                                                                                                                    component:
                                                                                                                        On,
                                                                                                                }
                                                                                                            ),
                                                                                                            Object(
                                                                                                                gr.jsx
                                                                                                            )(
                                                                                                                d.a,
                                                                                                                {
                                                                                                                    path: Y,
                                                                                                                    component:
                                                                                                                        ia,
                                                                                                                }
                                                                                                            ),
                                                                                                            Object(
                                                                                                                gr.jsx
                                                                                                            )(
                                                                                                                d.a,
                                                                                                                {
                                                                                                                    path: Q,
                                                                                                                    component:
                                                                                                                        Kr,
                                                                                                                }
                                                                                                            ),
                                                                                                            Object(
                                                                                                                gr.jsx
                                                                                                            )(
                                                                                                                d.a,
                                                                                                                {
                                                                                                                    path: $,
                                                                                                                    component:
                                                                                                                        ea,
                                                                                                                }
                                                                                                            ),
                                                                                                            Object(
                                                                                                                gr.jsx
                                                                                                            )(
                                                                                                                d.a,
                                                                                                                {
                                                                                                                    path: X,
                                                                                                                    component:
                                                                                                                        gn,
                                                                                                                }
                                                                                                            ),
                                                                                                            Object(
                                                                                                                gr.jsx
                                                                                                            )(
                                                                                                                d.a,
                                                                                                                {
                                                                                                                    path: J,
                                                                                                                    component:
                                                                                                                        pa,
                                                                                                                }
                                                                                                            ),
                                                                                                        ],
                                                                                                }
                                                                                            ),
                                                                                            Object(
                                                                                                gr.jsx
                                                                                            )(
                                                                                                da,
                                                                                                {}
                                                                                            ),
                                                                                        ],
                                                                                }
                                                                            ),
                                                                    }
                                                                ),
                                                            ],
                                                        }),
                                                        Object(gr.jsx)(na, {}),
                                                    ],
                                                }
                                            ),
                                        }),
                                    }),
                                }),
                            }),
                        });
                    });
            o.a.render(Object(gr.jsx)(ma, {}), document.getElementById("root"));
        },
        221: function (e, t, r) {},
        505: function (e, t, r) {},
        726: function (e, t, r) {
            r.p = (_window.__staticDomain || "") + "/login3/";
        },
        887: function (e, t) {},
    },
    [[1521, 1, 2]],
]);
//# sourceMappingURL=main.ed19e0b4.chunk.js.map
