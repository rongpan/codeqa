secret=$1
oldS="github.client.secret="
newS="github.client.secret=${secret}"
sed -i 's/'${oldS}'/'${newS}'/g' src/main/resources/application.properties
