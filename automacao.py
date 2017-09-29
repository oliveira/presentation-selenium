#-*- coding:utf-8 -*-
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

br = webdriver.Chrome('./chrome/chromedriver')
wait = WebDriverWait(br, 10)

def search(arg):
    br.get('http://google.com.br')
    wait.until(EC.visibility_of_element_located((By.XPATH, "//input[@name='q']")))
    br.find_element_by_xpath("//input[@name='q']").send_keys(arg)
    br.find_element_by_xpath("//input[@name='q']").send_keys(Keys.ENTER)

for x in range(5):
    search(x)

br.quit()
