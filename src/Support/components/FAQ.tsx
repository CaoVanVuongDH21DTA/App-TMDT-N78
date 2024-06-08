import React from 'react';
import '../Style/FAQ..css';

const FAQ: React.FC = () => {
    const rows = [
        { col1: "Question 1", col2: "Answer 1" },
        { col1: "3 & OiSTER", col2: "DK" },
        { col1: "3Pay", col2: "GB, IE" },
        { col1: "ATM/Bank Transfer", col2: "ID" },
        { col1: "Alipay HK", col2: "HK" },
        { col1: "Amazon Pay", col2: "AT, BE, CY, DE, ES, FR, GB, IE, IT, LU, NL, PT" },
        { col1: "Banco de Credito *", col2: "PE" },
        { col1: "Bancontact Card", col2: "BE" },
        { col1: "Blik", col2: "PL" },
        { col1: "Ceska sporitelna", col2: "CZ" },
        { col1: "Citadele bank", col2: "LV" },
        { col1: "Credit Card", col2: "AD, AE, AF, AG, AI, AL, AM, AN, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BV, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CO, CR, CV, CW, CX, CY, CZ, DE, DJ, DK, DM, DO, DZ, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HM, HN, HR, HT, HU, IE, IL, IM, IN, IO, IQ, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, NO, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SZ, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UG, UM, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, XK, YE, YT, ZA, ZM, ZW" },
        { col1: "DANA", col2: "ID" },
        { col1: "DOKU Wallet", col2: "ID" },
        { col1: "ERA", col2: "CZ" },
        { col1: "Elisa", col2: "EE, FI" },
        { col1: "FIO banka", col2: "CZ" },
        { col1: "GCash", col2: "PH" },
        { col1: "Giropay", col2: "DE" },
        { col1: "Havale/ATM/PTT", col2: "TR" },
        { col1: "Ininal *", col2: "TR" },
        { col1: "International Credit Card", col2: "KR" },
        { col1: "Is Bankasi", col2: "TR" },
        { col1: "KakaoPay", col2: "KR" },
        { col1: "Komercni Banka", col2: "CZ" },
        { col1: "Korean Credit Card", col2: "KR" },
        { col1: "Malaysia E-Banking", col2: "MY" },
        { col1: "Maybank", col2: "MY" },
        { col1: "Movistar", col2: "ES" },
        { col1: "MultiBanco", col2: "PT" },
        { col1: "Neosurf *", col2: "FR" },
        { col1: "Nordea Bank", col2: "SE" },
        { col1: "O2 Charge to Mobile", col2: "GB" },
        { col1: "OVO", col2: "ID" },
        { col1: "OXXO *", col2: "MX" },
        { col1: "Online Banking PL", col2: "PL" },
        { col1: "PAYCO", col2: "KR" },
        { col1: "PIX", col2: "BR" },
        { col1: "PayPal", col2: "AD, AE, AF, AG, AI, AL, AM, AN, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BV, BW, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CO, CR, CV, CW, CX, CY, CZ, DE, DJ, DK, DM, DO, DZ, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HM, HN, HR, HT, HU, ID, IE, IL, IM, IN, IO, IQ, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, NO, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SZ, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TT, TV, TW, TZ, UA, UG, UM, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, XK, YE, YT, ZA, ZM, ZW" },
        { col1: "Payconiq By Bancontact", col2: "BE" },
        { col1: "Paysafecard *", col2: "AT, AU, BE, CY, CZ, DE, DK, ES, FI, FR, GE, IE, IT, LT, LU, NL, NO, PL, PT, SE, SI, SK" },
        { col1: "Play", col2: "PL" },
        { col1: "Razer Gold Wallet *", col2: "CO, ID, MX, MY, PH, SG, TH, TR" },
        { col1: "SEB", col2: "EE, LT" },
        { col1: "Skrill Digital Wallet", col2: "DE, ES, FR, IE" },
        { col1: "Slovenska sporitelna a.s.", col2: "SK" },
        { col1: "Sofort", col2: "AT, CH, DE" },
        { col1: "Swedbank", col2: "EE, LT, LV, SE" },
        { col1: "Swisscom", col2: "CH" },
        { col1: "Tatra Banka", col2: "SK" },
        { col1: "Tele2", col2: "SE" },
        { col1: "Telia", col2: "FI" },
        { col1: "Toss", col2: "KR" },
        { col1: "Tre Faktura", col2: "SE" },
        { col1: "Trustly", col2: "DK, FI, SE" },
        { col1: "VUB Banka", col2: "SK" },
        { col1: "WINDTRE", col2: "IT" },
        { col1: "Ziraat Bankasi", col2: "TR" },
        { col1: "iDEAL", col2: "NL" },
        { col1: "微信支付", col2: "CN" },
        { col1: "支付宝", col2: "CN, HK " },
    ];

    return (
        <main className="main-content">
            <div className="title_faq">FREQUENTLY ASKED QUESTIONS</div>

            <div className="content_mid">
                <div>
                    <h2>Which platforms does the Epic Games Store support?</h2>
                    <p>The Epic Games Store currently offers PC and Mac support. You can check platform compatibility
                        for individual titles by referring to the "Specifications" section of any product page.</p>
                </div>
                <div>
                    <h2>What are the future plans for the Epic Games Store?</h2>
                    <p>You can find upcoming features, developer updates, and major known issues on our Epic Games Store
                        Roadmap on Trello.
                        We’ll also share significant updates with you on our news feed and social media pages such as
                        <a href="https://www.facebook.com/">Facebook</a>, <a href="https://x.com/?lang=vi">Twitter</a>,
                        <a href="https://www.instagram.com/">Instagram</a>, and <a
                            href="https://www.youtube.com/">YouTube</a>. </p>
                </div>
                <div>
                    <h2>How can I join the Epic Rewards program and earn back a percentage of what I spend on the Epic
                        Games Store?</h2>
                    <p>Enrollment in the Epic Rewards program is automatic, no sign up is needed. For more information,
                        please visit <a href="https://store.epicgames.com/en-US/features/epic-rewards">here</a>.</p>
                </div>
                <div>
                    <h2>Why does the Epic Games Store make exclusivity deals?</h2>
                    <p>Exclusives are a part of the growth of many successful platforms for games and for other
                        forms of digital entertainment, such as streaming video and music.</p>
                    <h3>Epic works in partnership with developers and publishers to offer games exclusively on
                        the store. In exchange for exclusivity, Epic provides them with financial support for
                        development and marketing, which enables them to build more polished games with
                        significantly less uncertainty for the creators. In addition, creators will earn 88% of
                        all the revenue from their game.</h3>
                </div>
                <div>
                    <h2>What is the Support-A-Creator program? </h2>
                    <p>The Support-A-Creator program enables content Creators to earn money from games in the
                        Epic Games Store by using Creator Links and Creator Tags. Learn more about the Support-A-Creator
                        program <a href="https://sac.epicgames.com/en-US/overview">here</a>.</p>
                </div>
                <div>
                    <h2>What’s this about free games?</h2>
                    <p>Epic will be offering a new free game available each week. When you claim a free game,
                        it’s yours to keep - even after the game is no longer available to new customers for free.</p>
                </div>
                <div>
                    <h2>I claimed a free game but don’t see it on my account now, why?</h2>
                    <p>Once you claim a free game, it’s yours to keep. If you come back later and don’t see it
                        in your account, please check to see if you have multiple accounts. If you created an
                        Epic account using an @gmail.com email address, log in to it directly using your Gmail
                        password; using the Google login button will create a distinct account even if it’s tied
                        to the same @gmail.com email address. And check to see if you have both a console-linked
                        account (logging in via PlayStation, Xbox, or Nintendo account) and a separate Epic account.
                        If you still encounter issues, please contact player support <a href="./Mid.tsx">here</a>.</p>
                </div>
                <div>
                    <h2>Can I try a game before I buy it?</h2>
                    <p>Some publishers occasionally offer demos or free trial periods for certain non-free games
                        from time to time (for example, a Free Weekend trial). During a free trial period, you can
                        download and play a trial version of the game before you decide to purchase, but you can no longer
                        access the game when the trial period ends.</p>
                </div>
                <div>
                    <h2>When are products eligible for a refund?</h2>
                    <p>Games and products are eligible for refund within 14 days of purchase if they are marked as
                        “refundable” or “self-refundable”. However, you must have less than 2 hours of runtime on record.
                        Products that include virtual currency or other consumables and products or games that are marked as
                        “non-refundable” are not eligible for refund.</p>
                    <h3>You will not be eligible for refunds for games or products from which you have been banned
                        or for which you have otherwise violated the Terms of Service. In addition, you may not be eligible
                        for refunds if Epic determines that you are abusing the refund policy. Learn more about
                        our refund policy <a href="https://www.epicgames.com/site/en-US/store-refund-policy">here</a>.</h3>
                </div>
                <div>
                    <h2>How do I contact support?</h2>
                    <p>You can contact our support team <a href="https://www.epicgames.com/help/en-US/contact-us">here</a>. We also recommend browsing our support center articles,
                        which may help answer questions or resolve issues.</p>
                </div>
                <div>
                    <h2>How do I make my Epic Games account secure?</h2>
                    <p>The Epic account system powers Fortnite, Rocket League, Fall Guys, the Epic Games Store, and
                        Unreal Engine. If you use the same email address and password on Epic as you used on another
                        site which has been compromised, then your account is vulnerable to attack. To secure your
                        Epic account, use a unique password, and enable multi-factor authentication. You can learn
                        more about the measures we take to protect your account and what you can do to stay safe
                        <a href="https://www.epicgames.com/help/en-US/c-Category_EpicAccounts/c-AccountSecurity/securing-your-epic-account-a000084730">here</a>.</p>
                </div>
                <div>
                    <h2>What languages does the Epic Games Store support?</h2>
                    <p>The Epic Games Store currently supports English, Arabic, German, Spanish (Spain), Spanish
                        (Latin America), French, Italian, Japanese, Korean, Polish, Portuguese, Russian, Thai,
                        Turkish, Simplified Chinese, and Traditional Chinese. In-game language support varies per
                        game, as provided by the developer; check each game’s store page for language availability.</p>
                </div>
                <div>
                    <h2>Does the Epic Games Store support regional pricing?</h2>
                    <p>Yes, we do support regional pricing in more than 190 countries and over 30 territories.
                        We also provide suggested regional prices for developers based on regional exchange rates,
                        local purchasing power, and industry experience.</p>
                </div>
                <div>
                    <h2>Which payment methods are supported?</h2>
                    <p>The Epic Games Store supports credit cards, PayPal, and a variety of alternative payment methods.
                        Payment methods offered may vary by country. More details about accepted payment methods
                        can be found <a href="https://www.epicgames.com/help/en-US/c-Category_EpicGamesStore/c-PaymentOptions">here</a>.</p>
                </div>
            </div>

            <div className="table-container">
                <table>
                    <thead>
                    <tr>
                        <th>FAQ</th>
                        <th>Answer</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <td>{row.col1}</td>
                            <td>{row.col2}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default FAQ;
