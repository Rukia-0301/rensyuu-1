console.log("jsファイルが読み込まれました");

const guild = {
    guildName: "spiltmilk",
    guildmembers: {
        leader: {position: "盟主", name: "hom"},
        subLeader: {position: "副盟主", name: "siki"},
        strategist: {position: "軍師", name: "ｴｲﾔｯ"},
        diplomat: {position: "外交役", name: "ルキア"},
        mentor: {
            position: "指南役",
            name: ["ふぇり", "あさ", "かなりあ", "ゆうり", "トマト"]
        },
        member: {
            position: "メンバー",
            name: ["るあ", "わた飴", "※ゆめ ぴりか※", "婭騎", "るぅ", "れん", "千秋", "まさ🐏", "さくら", "胃世界転生の端切", "mayu…", "ワトソン"]
        }
    }
}

console.log(guild.guildName);

for (let role in guild.guildmembers) {
    console.log("______________________________________");

    const member = guild.guildmembers[role];

    console.log(member.position);

    // nameが文字列（1人）か配列（複数人）かで分ける
    if (Array.isArray(member.name)) {
        for (let name of member.name) {
            console.log(name);
        }
    } else {
        console.log(member.name);
    }
}