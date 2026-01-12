import test,{expect} from '@playwright/test'
test("Alert handling inside frame using event listener", async({page})=>{
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
    await page.waitForTimeout(2000)
    page.on("dialog", dialogBox =>{
        console.log("Message of the alerrt is :"+dialogBox.message())
        console.log("Type of the alert is :"+dialogBox.type())
        if(dialogBox.type() === 'confirm'){
            dialogBox.accept()

        }
        else if (dialogBox.type() === 'prompt'){
            dialogBox.accept()
        }
    })

    await page.frameLocator("(//iframe)[1]").locator("//button[text()='Try it']").click()
    expect (page.frameLocator("(//iframe)[1]").locator("//p")).toHaveText("You pressed OK!")
    await page.waitForTimeout(2000)

})
