package oracle.spring;
import java.net.URL;
import javax.servlet.http.HttpServletRequest;
public class SsrfController {
  public byte[] fetch(HttpServletRequest req) throws Exception {
    String url = req.getParameter("url");
    return new URL(url).openStream().readAllBytes(); // SINK CWE-918
  }
}
