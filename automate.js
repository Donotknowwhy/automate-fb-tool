const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function automateFacebook() {
    // Khởi tạo trình duyệt
    const driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options().addArguments('--disable-notifications'))
        .build();


    try {
        // Mở trang Facebook
        await driver.get('https://www.facebook.com');

        // Đăng nhập (thay thế username và password)
        await driver.findElement(By.id('email')).sendKeys('username');
        await driver.findElement(By.id('pass')).sendKeys('password', Key.RETURN);

        // Đợi đến khi trang chính hiển thị sau khi đăng nhập
        await driver.wait(until.titleIs('Facebook'), 15000);

        for (let i = 1; i <= 3; i++) {

            const element = await driver.findElement(By.css('.x1i10hfl.x6umtig.x1b1mbwd.xaqea5y.xav7gou.x9f619.x1ypdohk.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x16tdsg8.x1hl2dhg.xggy1nq.x87ps6o.x1lku1pv.x1a2a7pz.x6s0dn4.xmjcpbm.x107yiy2.xv8uw2v.x1tfwpuw.x2g32xy.x78zum5.x1q0g3np.x1iyjqo2.x1nhvcw1.x1n2onr6.xt7dq6l.x1ba4aug.x1y1aw1k.xn6708d.xwib8y2.x1ye3gou[role="button"]'));
            await element.click();

            await driver.sleep(5000);

            // Viết bài đăng mới
            await driver.findElement(By.css('.xzsf02u.x1a2a7pz.x1n2onr6.x14wi4xw.x9f619.x1lliihq.x5yr21d.xh8yej3')).sendKeys(`test đăng bài selenium ${i}`);

            await driver.sleep(1000);

            // Tìm nút "Đăng" và thực hiện click
            const elementToClick = await driver.findElement(By.css('.x1n2onr6.x1ja2u2z.x78zum5.x2lah0s.xl56j7k.x6s0dn4.xozqiw3.x1q0g3np.xi112ho.x17zwfj4.x585lrc.x1403ito.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.xn6708d.x1ye3gou.xtvsq51.x1r1pt67'));
            await elementToClick.click();

            await driver.sleep(3000);


            // Tìm phần tử để click và gửi bình luận
            const commentElement = await driver.findElement(By.css('.xzsf02u.x1a2a7pz.x1n2onr6.x14wi4xw'));
            // await driver.executeScript('arguments[0].scrollIntoView();', commentElement);
            await driver.sleep(3000);
            await commentElement.click();


            // Chờ một chút để đảm bảo phần tử đã được mở
            await driver.sleep(2000);

            // Gửi nội dung bình luận
            await commentElement.sendKeys(`test comment selenium ${i}`, Key.ENTER);
            await driver.sleep(2000);
        }



    } finally {
        // Đóng trình duyệt sau khi hoàn thành
        // await driver.quit();
    }
}

// Gọi hàm tự động
automateFacebook();
