/* Basicly replaces text */
const token = "█";
const emojisize = 25;

function t(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(token);
    }
    return arr.join('');
}

function replaceComment(text) {
    return String(text)
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        
        // 🔞 i highly reccomend not searching up some of the stuff on here 🔞
        .replaceAll(/(double penetration)+/gim, t(18))
        .replaceAll(/(pearl necklace|rusty trombone)+/gim, t(14))
        .replaceAll(/(sunset camera)+/gim, t(13))
        .replaceAll(/(sex position|mating press|white power|sex offender)+/gim, t(12))
        .replaceAll(/(doggy style|intercourse)+/gim, t(11))
        .replaceAll(/(kitten lip|strip club|pornograph|paedophile)+/gim, t(10))
        .replaceAll(/(kitty lip|anilingus|camel toe|masturbat|wet dream|stripper|pedophile|marijuana|instagram)+/gim, t(9))
        .replaceAll(/(dick pic|ball sac|pleasure|oral sex|anal sex|creampie|cum shot|fellatio|she-male|she male|tamakeri|cameltoe|ejaculat|find you|jerk off|assmunch|babeland|god damn|facebook|snapchat)+/gim, t(8))
        .replaceAll(/(shut up|shaddup|goddamn|god dam|the hub|pornhub|tea bag|scrotum|ballsac|bukkake|facesit|fluffer|shemale|upskirt|mammary|quickie|undress|gay sex|erotism|eat ass|asshole|bastard|cumming|twitter|discord|patreon)+/gim, t(7))
        .replaceAll(/(penile|vagina|nipple|teabag|ekiben|erotic|tranny|sexcam|rimjob|raping|rapist|rectum|pantie|orgasm|nudity|faggot|incest|murder|hentai|retard|my ass|breast|tiktok|reddit|bereal)+/gim, t(6))
        .replaceAll(/(bitch|pussy|whore|f off|effin|penis|erect|semen|lmfao|smash|cheek|seggs|teste|prick|squaw|thong|vulva|naked|horny|dildo|booty|boner|balls)+/gim, t(5))
        .replaceAll(/(fuck|shit|fock|cunt|cock|dick|gyat|boob|lmao|nude|porn|wank|slut|milf|dilf|yiff|yaoi|twat|tush|rape|pedo|nsfw|jizz|kike|jugg|kill|hump|tidd|2g1c|anus|tits|titt)+/gim, t(4))
        .replaceAll(/(p ⭐️|⬛️ 🟧|cbt|bbc|kys|fag|cum)+/gim, t(3))
        .replaceAll(/(p⭐️|⬛️🟧|69)+/gim, t(2))
        .replaceAll(/(🤱|💦|🕳️|🤤|🍑|🥒|🍆|🖕|😩|😫|🥴|🚛|🍒|🍝|🌽|👅|🥵)+/gim, t(1))
        
}
