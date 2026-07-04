import org.springframework.web.bind.annotation.*;
@RestController
public class HelloController {
    @GetMapping("/echo")
    public String echo(@RequestParam String msg) {  // SOURCE
        return "<p>" + msg + "</p>";  // SINK CWE-79
    }
}
