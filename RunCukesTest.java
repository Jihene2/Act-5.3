package runcukes;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/Features", strict=true , glue="stepdefs" , tags="@tag1 and @tag2",
        		plugin = {"pretty","html:target/HtmlReports"}
		)

public class RunCukesTest {

}
