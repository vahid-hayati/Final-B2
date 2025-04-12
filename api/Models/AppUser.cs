using System.ComponentModel.DataAnnotations;

namespace api.Models;

public record AppUser(
string Email,
string Name
);