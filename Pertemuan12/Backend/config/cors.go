package config

var allowedOrigins = []string{
	"http://localhost:3000",
	"http://indrariksa.github.io",
	"http://localhost:5173/",
	"http://127.0.0.1:8088/",
}

func GetAllowedOrigin() []string {
	return allowedOrigins
}