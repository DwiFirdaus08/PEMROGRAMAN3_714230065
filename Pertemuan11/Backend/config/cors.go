package config

var allowedOrigins = []string{
	"http://localhost:3000",
	"http://indrariksa.github.io",
	"http://localhost:5173/",
}

func GetAllowedOrigin() []string {
	return allowedOrigins
}