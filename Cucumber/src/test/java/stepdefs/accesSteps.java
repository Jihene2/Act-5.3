package stepdefs;

import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class accesSteps {
	

	WebDriver driver = null;
	
	@Given("browser is open")
	public void browser_is_open() {
	System.out.println("Inside Step - browser is open");
	String projectPath = System.getProperty("user.dir");
	System.out.println("Project path is : "+projectPath);
	System.setProperty("webdriver.chrome.driver", projectPath+"/src/test/resources/drivers/chromedriver.exe");
	driver = new ChromeDriver();
	driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
	driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
	driver.manage().window().maximize();
	} @When("user put the link of the website")
	public void user_put_the_link_of_the_website() {
	System.out.println("Inside Step - user put the link");
	driver.navigate().to("http://todomvc.com/examples/react/#/");
	} @Then("show homepage")
	public void show_homepage() {
	System.out.println("Inside Step - show homepage");
	driver.findElement (By.className ("new-todo")).isDisplayed();
	}
	
	@Given("write to do")
	
	public void write_to_do() {
		driver.findElement(By.className ("new-todo")).sendKeys("jihene");
		
	}
	
	@When("user click enter")
	public void i_click_enter() {
		System.out.println("Inside Step - hits enter");
		driver.findElement(By.className ("new-todo")).sendKeys(Keys.ENTER);
		
	}

	@Then("the writen ToDo will be added to the list")
	public void the_writen_ToDo_will_be_added_to_the_list() {
		boolean taskFlag = driver.getPageSource().contains("jihene");
		assertEquals(true, taskFlag);
	
}
	
	

}	

	


	

	