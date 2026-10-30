/**
 * ProductContactForm.tsx — Formulário de solicitação de amostra/ficha técnica
 * Embutido na página individual de produto
 */

import { useState } from "react";
import { Mail, MoveUpRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/motion";
import type { Produto } from "@/lib/produtos";

interface ProductContactFormProps {
  produto: Produto;
}

interface FormState {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  mensagem: string;
}

const INITIAL: FormState = {
  nome: "",
  empresa: "",
  email: "",
  telefone: "",
  mensagem: "",
};

export default function ProductContactForm({
  produto,
}: ProductContactFormProps) {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.email || !form.empresa) {
      toast.error("Preencha nome, empresa e e-mail para continuar.");
      return;
    }
    setSending(true);
    // Integração futura com backend — por ora simula envio
    await new Promise(r => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
    toast.success(
      "Solicitação enviada! Nossa equipe entrará em contato em breve."
    );
  };

  return (
    <section
      id="contato-produto"
      className="produto-contact-section"
      aria-labelledby="contato-produto-title"
    >
      <div className="container produto-contact-inner">
        <Reveal delay={0.08} className="produto-contact-copy">
          <p className="kicker kicker--light">Fale com a Tecnovin</p>
          <h2
            id="contato-produto-title"
            className="display-heading display-heading--light"
          >
            Solicite uma <em>amostra</em>
          </h2>
          <p>
            Entre em contato com nossa equipe comercial para receber a ficha
            técnica completa, condições de fornecimento e informações sobre
            amostras de <strong>{produto.nomeComercial}</strong>.
          </p>
          <div className="produto-contact-detail">
            <Mail size={16} aria-hidden="true" />
            <span>contato@tecnovin.com.br</span>
          </div>
        </Reveal>

        <Reveal delay={0.22} className="produto-contact-form-wrap">
          {sent ? (
            <div
              className="produto-contact-success"
              role="status"
              aria-live="polite"
            >
              <CheckCircle2 size={40} strokeWidth={1.5} aria-hidden="true" />
              <h3>Solicitação enviada!</h3>
              <p>
                Nossa equipe comercial entrará em contato em até 2 dias úteis.
              </p>
            </div>
          ) : (
            <form
              id="form-solicitar-amostra"
              className="produto-contact-form"
              onSubmit={handleSubmit}
              noValidate
              aria-label={`Solicitar amostra de ${produto.nomeComercial}`}
            >
              {/* Hidden field com produto */}
              <input
                type="hidden"
                name="produto"
                value={produto.nomeComercial}
              />

              <div className="produto-form-row">
                <div className="produto-form-field">
                  <label htmlFor="nome">Nome *</label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    autoComplete="name"
                    placeholder="Seu nome"
                    value={form.nome}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>
                <div className="produto-form-field">
                  <label htmlFor="empresa">Empresa *</label>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    autoComplete="organization"
                    placeholder="Nome da empresa"
                    value={form.empresa}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="produto-form-row">
                <div className="produto-form-field">
                  <label htmlFor="email">E-mail *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="seu@email.com.br"
                    value={form.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>
                <div className="produto-form-field">
                  <label htmlFor="telefone">Telefone</label>
                  <input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+55 (xx) xxxxx-xxxx"
                    value={form.telefone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="produto-form-field">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  placeholder={`Informe volume estimado, aplicação pretendida e dúvidas sobre o ${produto.nomeComercial}…`}
                  value={form.mensagem}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                id="btn-solicitar-amostra"
                className="button button--light"
                disabled={sending}
                aria-busy={sending}
              >
                {sending ? "Enviando…" : "Enviar solicitação"}
                {!sending && (
                  <MoveUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
                )}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
