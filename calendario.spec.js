import {expect, test} from "@playwright/test"

test.describe("cefet-rj.br", () => {
    test("apresenta opção de calendario", async ( {page} )=> {
        await page.goto("https://cefet-rj.br")
        const elemento = await page.getByText('Calendário')
        expect(elemento).toBeDefined()
    })

    test("permite pesquisar um calendario", async ( {page} )=> {
        await page.goto("https://cefet-rj.br")
        await page.fill("#portal-searchbox-field", "calendario nova friburgo")
        await page.click('input[type="submit"]')
        const elemento = await page.getByText('Calendário')
        await expect(page.getByText("Nova Friburgo").toBeVisible())
    })
})
