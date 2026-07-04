package main
import ("io"; "net/http")
func proxy(w http.ResponseWriter, r *http.Request) {
    url := r.URL.Query().Get("url")  // SOURCE
    resp, _ := http.Get(url)  // SINK CWE-918
    io.Copy(w, resp.Body)
}
func main() {}
