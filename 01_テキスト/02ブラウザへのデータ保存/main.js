const geekSalon = ["web", "game", "iphone", "webExpert"]
const webExpert = {
  uniqueContent: "チーム開発",
  language: "javaScript",
}
localStorage.geekSalon = JSON.stringify(geekSalon)
localStorage.webExpert = JSON.stringify(webExpert)

console.log(localStorage.geekSalon)
console.log(localStorage.webExpert)
