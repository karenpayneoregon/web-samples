using Microsoft.AspNetCore.Mvc.RazorPages;
using Serilog;

namespace CSSVariables1.Pages;
public class IndexModel : PageModel
{
    public void OnGet()
    {
        Log.Information("Greetings");
    }
}
