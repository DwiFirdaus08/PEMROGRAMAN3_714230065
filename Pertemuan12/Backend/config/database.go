package config

import (
	"context"
	"fmt"
	"os"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var DBName = "db2025"
var MahasiswaCollection = "data_mahasiswa"
var MongoString string = os.Getenv("MONGODBSTRING")
var UserCollection = "user"

// MongoConnect creates a connection to the MongoDB database and returns the database instance.
// It uses the MongoDB connection string defined in the environment variable MONGODBSTRING.
func MongoConnect(dbname string) (db *mongo.Database) {
	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI(MongoString))
	if err != nil {
		fmt.Printf("MongoConnect: %v\n", err)
	}
	return client.Database(dbname)
}

