# Generate TypeScript client.
.PHONY: ts-client
ts-client: client-prereqs
	@echo "Generating TypeScript client based on the OpenAPI spec"
	@docker run --rm -it \
     	  -v ${PWD}:/repo \
     	  openapitools/openapi-generator-cli:v4.3.1 generate \
     	  --generator-name typescript-fetch \
     	  --input-spec /repo/api-spec/swagger.json \
     	  --output /repo/src/client

# Client pre-requisites.
client-prereqs:
	rm -rf src/client
	mkdir -p src/client
