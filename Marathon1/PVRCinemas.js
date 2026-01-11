import  { test, expect } from '@playwright/test'
test ("Playwright Basics Marathon Program 1", async({page})=>{
    await page.goto("https://www.pvrcinemas.com/")

    await page.locator("//h6[text()='Chennai']").click()
    await page.locator("//span[text()='Cinema']").click()
    await page.locator("//div[@aria-label='Select Cinema']").click()
    await page.locator("//li/span[text()='INOX National,Virugambakkam Chennai']").click() 
    await page.locator("//li/span[contains(text(),'Today')]").click()
    await page.locator("//li/span[text()='PRABHAS S THE RAJASAAB']").click()
    await page.waitForTimeout(2000)
    await page.locator("//li/span/span[text()='03:20 PM']").click()
    await page.locator("(//button/span[text()='Book'])[4]").click()
    await page.waitForTimeout(2000)
    await page.locator("//button[text()='Accept']").click()    
    await page.locator("//span[@id='SL.SILVER|H:1']").click()
 
    const seatInfo = await page.locator("//div[@class='seat-info']").innerText()
    console.log(seatInfo)
    const grandtotal = await page.locator("//div[@class='grand-total']").innerText()
    console.log(grandtotal)
    const totalPrice = await page.locator("//div[@class='grand-prices']/h6").innerText()
    console.log(totalPrice)
    const title = await page.title()
    console.log(title)
    const expectedTitle = "PVR Cinemas"
    expect.soft(title).toEqual(expectedTitle)

    await page.locator("//button[text()='Proceed']").click()
    await page.waitForTimeout(2000)
})
