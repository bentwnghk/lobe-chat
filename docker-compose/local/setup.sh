#!/bin/bash

# ==================
# == Env settings ==
# ==================

# ======================
# == Process the args ==
# ======================

# 1. Default values of arguments
# Arg: -f
# Determine force download asserts, default is not
FORCE_DOWNLOAD=false

# Arg: -l or --lang
# Determine the language to show, default is en
LANGUAGE="en_US"

# Arg: --url
# Determine the source URL to download files
SOURCE_URL="https://raw.githubusercontent.com/lobehub/lobe-chat/main"

# Arg: --host
# Determine the server host
HOST=""

# 2. Parse script arguments
while getopts "fl:-:" opt; do
  case $opt in
    f)
      FORCE_DOWNLOAD=true
      ;;
    l)
      LANGUAGE=$OPTARG
      ;;
    -)
      case "${OPTARG}" in
        lang)
          LANGUAGE="${!OPTIND}"
          OPTIND=$(($OPTIND + 1))
          ;;
        url)
          SOURCE_URL="${!OPTIND}"
          OPTIND=$(($OPTIND + 1))
          ;;
        host)
          HOST="${!OPTIND}"
          OPTIND=$(($OPTIND + 1))
          ;;
        *)
          echo "Usage: $0 [-f] [-l language|--lang language] [--url source] [--host serverhost]" >&2
          exit 1
          ;;
      esac
      ;;
    *)
      echo "Usage: $0 [-f] [-l language|--lang language] [--url source]" >&2
      exit 1
      ;;
  esac
done

# ===============
# == Variables ==
# ===============
# File list
SUB_DIR="docker-compose/local"
FILES=(
  "$SUB_DIR/docker-compose.yml"
  "$SUB_DIR/.env.example"
  "$SUB_DIR/init_data.json"
  "$SUB_DIR/s3_data.tar.gz"
)

# Supported languages and messages
# Arg: -l --lang
# If the language is not supported, default to English
# Function to show messages
show_message() {
  local key="$1"
  case $key in
    downloading)
      case $LANGUAGE in
        zh_CN)
          echo "正在下载文件..."
          ;;
        *)
          echo "Downloading files..."
          ;;
      esac
      ;;
    downloaded)
      case $LANGUAGE in
        zh_CN)
          echo " 已经存在，跳过下载。"
          ;;
        *)
          echo " already exists, skipping download."
          ;;
      esac
      ;;
    extracted_success)
      case $LANGUAGE in
        zh_CN)
          echo " 解压成功到目录："
          ;;
        *)
          echo " extracted successfully to directory: "
          ;;
      esac
      ;;
    extracted_failed)
      case $LANGUAGE in
        zh_CN)
          echo " 解压失败。"
          ;;
        *)
          echo " extraction failed."
          ;;
      esac
      ;;
    file_not_exists)
      case $LANGUAGE in
        zh_CN)
          echo " 不存在。"
          ;;
        *)
          echo " does not exist."
          ;;
      esac
      ;;
    security_secrect_regenerate)
      case $LANGUAGE in
        zh_CN)
          echo "重新生成安全密钥..."
          ;;
        *)
          echo "Regenerate security secrets..."
          ;;
      esac
      ;;
    security_secrect_regenerate_failed)
      case $LANGUAGE in
        zh_CN)
          echo "无法重新生成安全密钥："
          ;;
        *)
          echo "Failed to regenerate security secrets: "
          ;;
      esac
      ;;
    security_secrect_regenerate_report)
      case $LANGUAGE in
        zh_CN)
          echo "安全密钥生成结果如下："
          ;;
        *)
          echo "Security secret generation results are as follows:"
          ;;
      esac
      ;;
    tips_run_command)
      case $LANGUAGE in
        zh_CN)
          echo "您已经完成了所有配置。请运行以下命令启动Mr.🆖 AI："
          ;;
        *)
          echo "You have completed all configurations. Please run this command to start Mr.🆖 AI:"
          ;;
      esac
      ;;
    tips_show_documentation)
      case $LANGUAGE in
        zh_CN)
          echo "完整的环境变量在'.env'中可以在文档中找到："
          ;;
        *)
          echo "Full environment variables in the '.env' can be found at the documentation on "
          ;;
      esac
      ;;
    tips_show_documentation_url)
      case $LANGUAGE in
        zh_CN)
          echo "https://lobehub.com/zh/docs/self-hosting/environment-variables"
          ;;
        *)
          echo "https://lobehub.com/docs/self-hosting/environment-variables"
          ;;
      esac
      ;;
    tips_warning)
      case $LANGUAGE in
        zh_CN)
          echo "警告：如果你正在生产环境中使用，请在日志中检查密钥是否已经生成！！！"
          ;;
        *)
          echo "Warning: If you are using it in a production environment, please check if the keys have been generated in the logs!!!"
          ;;
      esac
      ;;
  esac
}

# Function to download files
download_file() {
  local file_url="$1"
  local local_file="$2"

  if [ "$FORCE_DOWNLOAD" = false ] && [ -e "$local_file" ]; then
    echo "$local_file" $(show_message "downloaded")
    return 0
  fi

  wget -q --show-progress "$file_url" -O "$local_file"
}

extract_file() {
  local file_name=$1
  local target_dir=$2

  if [ -e "$file_name" ]; then
    tar -zxvf "$file_name" -C "$target_dir" > /dev/null 2>&1
    if [ $? -eq 0 ]; then
      echo "$file_name" $(show_message "extracted_success") "$target_dir"
    else
      echo "$file_name" $(show_message "extracted_failed")
      exit 1
    fi
  else
    echo "$file_name" $(show_message "file_not_exists")
    exit 1
  fi
}

# Define colors
declare -A colors
colors=(
  [black]="\e[30m"
  [red]="\e[31m"
  [green]="\e[32m"
  [yellow]="\e[33m"
  [blue]="\e[34m"
  [magenta]="\e[35m"
  [cyan]="\e[36m"
  [white]="\e[37m"
  [reset]="\e[0m"
)

print_centered() {
  local text="$1"                                   # Get input texts
  local color="${2:-reset}"                         # Get color, default to reset
  local term_width=$(tput cols)                     # Get terminal width
  local text_length=${#text}                        # Get text length
  local padding=$(((term_width - text_length) / 2)) # Get padding
  # Check if the color is valid
  if [[ -z "${colors[$color]}" ]]; then
    echo "Invalid color specified. Available colors: ${!colors[@]}"
    return 1
  fi
  # Print the text with padding
  printf "%*s${colors[$color]}%s${colors[reset]}\n" $padding "" "$text"
}

# Download files asynchronously
download_file "$SOURCE_URL/${FILES[0]}" "docker-compose.yml"
download_file "$SOURCE_URL/${FILES[1]}" ".env"
download_file "$SOURCE_URL/${FILES[2]}" "init_data.json"
download_file "$SOURCE_URL/${FILES[3]}" "s3_data.tar.gz"

# Extract .tar.gz file without output
extract_file "s3_data.tar.gz" "."
rm s3_data.tar.gz

# ==========================
# === Regenerate Secrets ===
# ==========================

generate_key() {
  if [[ -z "$1" ]]; then
    echo "Usage: generate_key <length>"
    return 1
  fi
  echo $(openssl rand -hex $1 | tr -d '\n' | fold -w $1 | head -n 1)
}

echo $(show_message "security_secrect_regenerate")

# Generate CASDOOR_SECRET
CASDOOR_SECRET=$(generate_key 32)
if [ $? -ne 0 ]; then
  echo $(show_message "security_secrect_regenerate_failed") "CASDOOR_SECRET"
else
  # Search and replace the value of CASDOOR_SECRET in .env
  sed -i "s#^AUTH_CASDOOR_SECRET=.*#AUTH_CASDOOR_SECRET=${CASDOOR_SECRET}#" .env
  if [ $? -ne 0 ]; then
    echo $(show_message "security_secrect_regenerate_failed") "AUTH_CASDOOR_SECRET in \`.env\`"
  fi
  # replace `clientSecrect` in init_data.json
  sed -i "s#dbf205949d704de81b0b5b3603174e23fbecc354#${CASDOOR_SECRET}#" init_data.json
  if [ $? -ne 0 ]; then
    echo $(show_message "security_secrect_regenerate_failed") "AUTH_CASDOOR_SECRET in \`init_data.json\`"
  fi
fi

# Generate Casdoor User
CASDOOR_USER="admin"
CASDOOR_PASSWORD=$(generate_key 6)
if [ $? -ne 0 ]; then
  echo $(show_message "security_secrect_regenerate_failed") "CASDOOR_PASSWORD"
else
  # replace `password` in init_data.json
  sed -i "s/"123"/${CASDOOR_PASSWORD}/" init_data.json
  if [ $? -ne 0 ]; then
    echo $(show_message "security_secrect_regenerate_failed") "CASDOOR_PASSWORD in \`init_data.json\`"
  fi
fi

# Generate Minio S3 access key
# Temporarily disable key gen for minio because 
# minio can not start with a access key in envs
#S3_SECRET_ACCESS_KEY=$(generate_key 32)
#if [ $? -ne 0 ]; then
#  echo $(show_message "security_secrect_regenerate_failed") "S3_SECRET_ACCESS_KEY"
#else
#  # Search and replace the value of S3_SECRET_ACCESS_KEY in .env
#  sed -i "s#^S3_SECRET_ACCESS_KEY=.*#S3_SECRET_ACCESS_KEY=${S3_SECRET_ACCESS_KEY}#" .env
#  if [ $? -ne 0 ]; then
#    echo $(show_message "security_secrect_regenerate_failed") "S3_SECRET_ACCESS_KEY in \`.env\`"
#  fi
#fi

# Modify the .env file if the host is specified
if [ -n "$HOST" ]; then
  # Modify env
  sed -i "s/localhost/$HOST/g" .env
  if [ $? -ne 0 ]; then
    echo $(show_message "security_secrect_regenerate_failed") "HOST in \`.env\`"
  fi
  # Modify casdoor init data
  sed -i "s/localhost/$HOST/g" init_data.json
  if [ $? -ne 0 ]; then
    echo $(show_message "security_secrect_regenerate_failed") "HOST in \`init_data.json\`"
  fi
fi

# Display configuration reports

echo $(show_message "security_secrect_regenerate_report")

if [ -n "$HOST" ]; then
  echo -e "Server Host: $HOST"
fi
echo -e "Casdoor: \n - Username: admin\n  - Password: ${CASDOOR_PASSWORD}\n  - Client Secret: ${CASDOOR_SECRET}"

# ===========================
# == Display final message ==
# ===========================

printf "\n%s\n\n" "$(show_message "tips_run_command")"
print_centered "docker compose up -d" "green"
printf "\n%s" "$(show_message "tips_show_documentation")"
printf "%s\n" $(show_message "tips_show_documentation_url")
printf "\n\e[33m%s\e[0m\n" "$(show_message "tips_warning")"
