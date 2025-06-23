package main

import (
	"fmt"
	"inibackend/config"
	"inibackend/router"
	"log"
	"os"
	"strings"

	_ "inibackend/docs"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/joho/godotenv"
)

func init() {
	err := godotenv.Load()
	if err != nil {
		fmt.Println("Gagal memuat file .env:", err)
	}
}

// @title TES SWAGGER PEMROGRAMAN III
// @version 1.0
// @description This is a sample swagger for Fiber

// @contact.name API Support
// @contact.url https://github.com/indrariksa
// @contact.email indra@ulbi.ac.id

// @host localhost:8088
// @BasePath /
// @schemes http
// @securityDefinitions.apikey BearerAuth
// @in header
// @name Authorization

func main() {
	app := fiber.New()

	//logging Request di terminal
	app.Use(logger.New())

	//Basic CORS
	app.Use(cors.New(cors.Config{
		AllowOrigins:     strings.Join(config.GetAllowedOrigin(), ","),
		AllowCredentials: true,
		AllowMethods:     "GET, POST, PUT, DELETE,OPTIONS",
	}))

	//Route Mahasiswa
	router.SetupRoutes(app)

	//Handler 404
	app.Use(func(c *fiber.Ctx) error {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"status":  fiber.StatusNotFound,
			"Message": "Endpoint tidak ditemukan",
		})
	})

	//Baca PORT yang ada di .env
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000" //Default port kalau tidak ada di .env
	}

	//untuk log cek konek di port mana
	log.Printf("Server running on port %s\n", port)
	if err := app.Listen(":" + port); err != nil{
		log.Fatalf("Eror starting server: %v", err)
	}//Koneksi terputus
}

	