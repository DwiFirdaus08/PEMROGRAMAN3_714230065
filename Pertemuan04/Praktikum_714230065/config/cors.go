package config

var allowedOrigins = []string{
	"http://localhost:3000",
	"http://indrariksa.github.io",
}

func GetAllowedOrigin() []string {
	return allowedOrigins
}