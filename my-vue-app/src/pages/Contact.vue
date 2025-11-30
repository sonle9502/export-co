<template>
  <section class="page contact">
    <h1>{{ info.title }}</h1>
    <p class="desc">{{ info.description }}</p>

    <form class="contact-form" @submit.prevent="onSubmit">
      <p class="note">
        お問い合わせ頂き誠にありがとうございます。<br />
        お問い合わせいただいた内容により、一部返答できない場合や回答に時間がかかる場合ございます。<br />
        あらかじめご了承ください。
      </p>

      <!-- お問い合わせの種類 -->
      <div class="form-item">
        <label for="type">お問い合わせの種類 *</label>
        <select id="type" v-model="form.type" required>
          <option value="">選択してください</option>
          <option>商品に関するお問い合わせ</option>
          <option>サポートに関するお問い合わせ</option>
          <option>その他</option>
        </select>
      </div>

      <!-- 会社名 -->
      <div class="form-item">
        <label>会社名・団体名 *</label>
        <input type="text" v-model="form.company" required />
      </div>

      <div class="form-item">
        <label>会社名・団体名フリガナ *</label>
        <input type="text" v-model="form.companyKana" required />
      </div>

      <!-- 部署 -->
      <div class="form-item">
        <label>部署名</label>
        <input type="text" v-model="form.department" />
      </div>

      <!-- お名前 -->
      <div class="form-item name-group">
        <label>お名前 *</label>
        <input type="text" placeholder="姓" v-model="form.lastName" required />
        <input type="text" placeholder="名" v-model="form.firstName" required />
      </div>

      <div class="form-item name-group">
        <label>お名前フリガナ *</label>
        <input type="text" placeholder="姓" v-model="form.lastNameKana" required />
        <input type="text" placeholder="名" v-model="form.firstNameKana" required />
      </div>

      <!-- Email -->
      <div class="form-item">
        <label>Email *</label>
        <input type="email" v-model="form.email" required />
      </div>
      <div class="form-item">
        <label>Email（確認用） *</label>
        <input type="email" v-model="form.emailConfirm" required />
      </div>

      <!-- 電話番号 -->
      <div class="form-item">
        <label>電話番号</label>
        <input type="tel" v-model="form.phone" />
      </div>

      <!-- Webサイト -->
      <div class="form-item">
        <label>Webサイト</label>
        <input type="url" v-model="form.website" />
      </div>

      <!-- 住所 -->
      <div class="form-item address-group">
        <label>住所 *</label>
        <input type="text" placeholder="郵便番号" v-model="form.postalCode" required />
        <input type="text" placeholder="都道府県" v-model="form.prefecture" required />
        <input type="text" placeholder="市区町村" v-model="form.city" required />
        <input type="text" placeholder="番地" v-model="form.street" required />
      </div>

      <!-- お問い合わせ内容 -->
      <div class="form-item">
        <label>お問い合わせ内容 *</label>
        <textarea v-model="form.message" rows="6" required></textarea>
      </div>

      <!-- Privacy policy -->
      <div class="form-item checkbox-item">
        <input type="checkbox" v-model="form.agree" id="agree" required />
        <label for="agree">プライバシーポリシーに同意のうえ、お問い合わせください。</label>
      </div>

      <div class="form-buttons">
        <button type="button" @click="onConfirm">確認する</button>
        <button type="submit" :disabled="!form.agree">同意して送信する</button>
      </div>
    </form>
  </section>
</template>

<script>
import messages from '../locales'
import emailjs from '@emailjs/browser'

export default {
  data() {
    return {
      form: {
        type: '',
        company: '',
        companyKana: '',
        department: '',
        lastName: '',
        firstName: '',
        lastNameKana: '',
        firstNameKana: '',
        email: '',
        emailConfirm: '',
        phone: '',
        website: '',
        postalCode: '',
        prefecture: '',
        city: '',
        street: '',
        message: '',
        agree: false
      }
    }
  },
  computed: {
    info() {
      return messages[this.$i18n.locale].contact
    }
  },
  methods: {
    onConfirm() {
      alert('内容を確認してください。'); // Hiển thị preview nếu cần
    },
    onSubmit() {
      if (this.form.email !== this.form.emailConfirm) {
        alert('メールアドレスが一致しません。');
        return;
      }

      // templateParams gửi đến EmailJS
      const templateParams = {
        name: `${this.form.lastName} ${this.form.firstName}`,
        email: this.form.email,
        type: this.form.type,
        company: this.form.company,
        companyKana: this.form.companyKana,
        department: this.form.department,
        lastNameKana: this.form.lastNameKana,
        firstNameKana: this.form.firstNameKana,
        phone: this.form.phone,
        website: this.form.website,
        postalCode: this.form.postalCode,
        prefecture: this.form.prefecture,
        city: this.form.city,
        street: this.form.street,
        message: this.form.message,
        title: this.info.title
      }

      emailjs.send(
        'service_e2abusq',      // → Service ID của bạn
        'template_0fsmtsw',   // → Template ID của bạn
        templateParams,
        '7Ha9LpuzieEyxyzGv'          // → Public Key của bạn
      )
      .then(() => {
        alert('送信されました。ありがとうございました！');
        this.resetForm();
      })
      .catch((error) => {
        console.error(error);
        alert('送信に失敗しました。もう一度試してください。');
      })
    },
    resetForm() {
      Object.keys(this.form).forEach(key => {
        if (typeof this.form[key] === 'boolean') this.form[key] = false;
        else this.form[key] = '';
      })
    }
  }
}
</script>

<style scoped>
/* Giữ nguyên CSS của bạn */
.page {
  max-width: 800px;
  margin: auto;
  padding: 50px 20px;
}
.page h1 {
  color: #00396b;
  margin-bottom: 15px;
}
.desc, .note {
  color: #555;
  margin-bottom: 25px;
  font-size: 1rem;
  line-height: 1.6;
}
.contact-form {
  background: #f5faff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}
.form-item {
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;
  text-align: left;
}
.form-item label {
  font-weight: 600;
  margin-bottom: 6px;
  color: #00396b;
}
.form-item input,
.form-item select,
.form-item textarea {
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
}
.form-item input:focus,
.form-item select:focus,
.form-item textarea:focus {
  outline: none;
  border-color: #0063cc;
}
.name-group input {
  width: 48%;
  display: inline-block;
  margin-right: 4%;
}
.name-group input:last-child {
  margin-right: 0;
}
.address-group input {
  margin-bottom: 8px;
}
.checkbox-item {
  display: flex;
  align-items: center;
}
.checkbox-item label {
  margin-left: 8px;
  font-weight: normal;
}
.form-buttons {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 20px;
}
.form-buttons button {
  background: #00396b;
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}
.form-buttons button:disabled {
  background: #ccc;
  cursor: not-allowed;
}
.form-buttons button:hover:not(:disabled) {
  background: #0055a5;
}
@media (max-width: 600px) {
  .name-group input {
    width: 100%;
    margin-right: 0;
    margin-bottom: 8px;
  }
}
</style>
