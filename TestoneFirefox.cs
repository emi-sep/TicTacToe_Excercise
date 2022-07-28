using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Remote;
using OpenQA.Selenium.Support.UI;
using OpenQA.Selenium.Interactions;
using NUnit.Framework;
[TestFixture]
public class DefaultSuiteTest {
  private IWebDriver driver;
  public IDictionary<string, object> vars {get; private set;}
  private IJavaScriptExecutor js;
  [SetUp]
  public void SetUp() {
    driver = new FirefoxDriver();
    js = (IJavaScriptExecutor)driver;
    vars = new Dictionary<string, object>();
  }
  [TearDown]
  protected void TearDown() {
    driver.Quit();
  }
  [Test]
  public void submitReject() {
    // Test name: SubmitReject
    // Step # | name | target | value
    // 1 | open | /apps/Router/PaymentSummaryMaterial?PaymentId=3521&NavDataKey=T1658866602845_371322884146606977_23&ResultsSelectedId=3521 | 
    driver.Navigate().GoToUrl("https://ji-dev-app.corp.jaggaer.com/apps/Router/PaymentSummaryMaterial?PaymentId=3521&NavDataKey=T1658866602845_371322884146606977_23&ResultsSelectedId=3521");
    // 2 | setWindowSize | 1936x1056 | 
    driver.Manage().Window.Size = new System.Drawing.Size(1936, 1056);
    // 3 | click | id=MaterialPayments_Action_Submit | 
    driver.FindElement(By.Id("MaterialPayments_Action_Submit")).Click();
    // 4 | mouseOver | css=.btn-primary:nth-child(2) | 
    {
      var element = driver.FindElement(By.CssSelector(".btn-primary:nth-child(2)"));
      Actions builder = new Actions(driver);
      builder.MoveToElement(element).Perform();
    }
    // 5 | click | css=.btn-primary:nth-child(2) | 
    driver.FindElement(By.CssSelector(".btn-primary:nth-child(2)")).Click();
    // 6 | mouseOut | css=.btn-primary:nth-child(2) | 
    {
      var element = driver.FindElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.MoveToElement(element, 0, 0).Perform();
    }
    // 7 | click | id=MaterialPayments_Action_Assign_2 | 
    driver.FindElement(By.Id("MaterialPayments_Action_Assign_2")).Click();
    // 8 | mouseOver | css=.btn-primary:nth-child(2) | 
    {
      var element = driver.FindElement(By.CssSelector(".btn-primary:nth-child(2)"));
      Actions builder = new Actions(driver);
      builder.MoveToElement(element).Perform();
    }
    // 9 | click | css=.btn-primary:nth-child(2) | 
    driver.FindElement(By.CssSelector(".btn-primary:nth-child(2)")).Click();
    // 10 | mouseOut | css=.btn-primary:nth-child(2) | 
    {
      var element = driver.FindElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.MoveToElement(element, 0, 0).Perform();
    }
    // 11 | mouseOver | id=MaterialPayments_Action_Approve_2_2 | 
    {
      var element = driver.FindElement(By.Id("MaterialPayments_Action_Approve_2_2"));
      Actions builder = new Actions(driver);
      builder.MoveToElement(element).Perform();
    }
    // 12 | mouseOut | id=MaterialPayments_Action_Approve_2_2 | 
    {
      var element = driver.FindElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.MoveToElement(element, 0, 0).Perform();
    }
    // 13 | click | id=MaterialPayments_Action_Return_2 | 
    driver.FindElement(By.Id("MaterialPayments_Action_Return_2")).Click();
    // 14 | mouseOver | id=MaterialPayments_Action_Return_2 | 
    {
      var element = driver.FindElement(By.Id("MaterialPayments_Action_Return_2"));
      Actions builder = new Actions(driver);
      builder.MoveToElement(element).Perform();
    }
    // 15 | mouseOut | id=MaterialPayments_Action_Return_2 | 
    {
      var element = driver.FindElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.MoveToElement(element, 0, 0).Perform();
    }
    // 16 | selectFrame | index=2 | 
    driver.SwitchTo().Frame(2);
    // 17 | click | id=Action_Note | 
    driver.FindElement(By.Id("Action_Note")).Click();
    // 18 | type | id=Action_Note | test
    driver.FindElement(By.Id("Action_Note")).SendKeys("test");
    // 19 | click | id=Button_Save_Changes | 
    driver.FindElement(By.Id("Button_Save_Changes")).Click();
  }
  }