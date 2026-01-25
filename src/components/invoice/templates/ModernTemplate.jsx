'use client';

import { FileText } from 'lucide-react';
import { formatCurrency, formatDate } from '@/lib/invoice-utils';

export const ModernTemplate = ({ invoice, theme }) => {
  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
        fontFamily: theme.fontFamily,
        padding: '32px',
        minHeight: '100%',
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: theme.accentColor,
          padding: '32px',
          borderRadius: '12px',
          marginBottom: '32px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {invoice.senderLogo ? (
              <img
                src={invoice.senderLogo}
                alt="Logo"
                style={{
                  height: '48px',
                  width: '48px',
                  objectFit: 'contain',
                }}
              />
            ) : (
              <div
                style={{
                  height: '48px',
                  width: '48px',
                  borderRadius: '12px',
                  backgroundColor: theme.primaryColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FileText
                  style={{ height: '24px', width: '24px', color: '#FFFFFF' }}
                />
              </div>
            )}

            <div>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>
                {invoice.senderName || 'Your Company'}
              </h2>
              <p
                style={{
                  fontSize: '14px',
                  color: theme.mutedTextColor,
                  margin: 0,
                }}
              >
                {invoice.senderEmail}
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>
              INVOICE
            </h1>
            <p
              style={{
                fontSize: '16px',
                fontWeight: '600',
                color: theme.primaryColor,
                marginTop: '4px',
              }}
            >
              {invoice.invoiceNumber}
            </p>
          </div>
        </div>
      </div>

      {/* Addresses & Dates */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginBottom: '32px',
        }}
      >
        <div>
          <h4
            style={{
              fontSize: '11px',
              fontWeight: '600',
              color: theme.mutedTextColor,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '8px',
            }}
          >
            From
          </h4>
          <p style={{ fontWeight: '500', margin: 0 }}>
            {invoice.senderName || '—'}
          </p>
          <p
            style={{
              fontSize: '14px',
              color: theme.mutedTextColor,
              whiteSpace: 'pre-line',
              margin: '4px 0',
            }}
          >
            {invoice.senderAddress || '—'}
          </p>
          <p
            style={{
              fontSize: '14px',
              color: theme.mutedTextColor,
              margin: 0,
            }}
          >
            {invoice.senderPhone}
          </p>
        </div>

        <div>
          <h4
            style={{
              fontSize: '11px',
              fontWeight: '600',
              color: theme.mutedTextColor,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '8px',
            }}
          >
            Bill To
          </h4>
          <p style={{ fontWeight: '500', margin: 0 }}>
            {invoice.clientName || '—'}
          </p>
          <p
            style={{
              fontSize: '14px',
              color: theme.mutedTextColor,
              whiteSpace: 'pre-line',
              margin: '4px 0',
            }}
          >
            {invoice.clientAddress || '—'}
          </p>
          <p
            style={{
              fontSize: '14px',
              color: theme.mutedTextColor,
              margin: 0,
            }}
          >
            {invoice.clientEmail}
          </p>
        </div>

        <div>
          <div style={{ marginBottom: '12px' }}>
            <h4
              style={{
                fontSize: '11px',
                fontWeight: '600',
                color: theme.mutedTextColor,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '4px',
              }}
            >
              Invoice Date
            </h4>
            <p style={{ fontWeight: '500', margin: 0 }}>
              {formatDate(invoice.createdAt, 'long')}
            </p>
          </div>

          <div>
            <h4
              style={{
                fontSize: '11px',
                fontWeight: '600',
                color: theme.mutedTextColor,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '4px',
              }}
            >
              Due Date
            </h4>
            <p style={{ fontWeight: '500', margin: 0 }}>
              {formatDate(invoice.dueDate, 'long')}
            </p>
          </div>
        </div>
      </div>

      {/* Items Table */}
      <div
        style={{
          border: `1px solid ${theme.borderColor}`,
          borderRadius: '12px',
          overflow: 'hidden',
          marginBottom: '32px',
        }}
      >
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: theme.accentColor }}>
              {['Description', 'Qty', 'Price', 'Tax', 'Discount', 'Total'].map(
                (h) => (
                  <th
                    key={h}
                    style={{
                      textAlign:
                        h === 'Description'
                          ? 'left'
                          : h === 'Qty'
                          ? 'center'
                          : 'right',
                      fontSize: '11px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      padding: '12px 16px',
                    }}
                  >
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody>
            {invoice.items.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  style={{
                    padding: '32px',
                    textAlign: 'center',
                    color: theme.mutedTextColor,
                  }}
                >
                  No items added
                </td>
              </tr>
            ) : (
              invoice.items.map((item, index) => (
                <tr
                  key={item.id}
                  style={{
                    backgroundColor:
                      index % 2 === 0 ? 'transparent' : theme.accentColor,
                  }}
                >
                  <td style={{ padding: '12px 16px' }}>
                    {item.description || '—'}
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      textAlign: 'center',
                      color: theme.mutedTextColor,
                    }}
                  >
                    {item.quantity}
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      textAlign: 'right',
                      color: theme.mutedTextColor,
                    }}
                  >
                    {formatCurrency(item.unitPrice, invoice.currency)}
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      textAlign: 'right',
                      color: theme.mutedTextColor,
                    }}
                  >
                    {item.taxRate}%
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      textAlign: 'right',
                      color: theme.mutedTextColor,
                    }}
                  >
                    {item.discount}%
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      textAlign: 'right',
                      fontWeight: '500',
                    }}
                  >
                    {formatCurrency(item.total, invoice.currency)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Totals */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ width: '280px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: theme.mutedTextColor }}>Subtotal</span>
            <span>{formatCurrency(invoice.subtotal, invoice.currency)}</span>
          </div>

          {invoice.discountTotal > 0 && (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: theme.mutedTextColor }}>Discount</span>
              <span style={{ color: '#10B981' }}>
                -{formatCurrency(invoice.discountTotal, invoice.currency)}
              </span>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: theme.mutedTextColor }}>
              Tax ({invoice.taxType})
            </span>
            <span>{formatCurrency(invoice.taxTotal, invoice.currency)}</span>
          </div>

          {invoice.shippingCost > 0 && (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: theme.mutedTextColor }}>Shipping</span>
              <span>{formatCurrency(invoice.shippingCost, invoice.currency)}</span>
            </div>
          )}

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              borderTop: `2px solid ${theme.primaryColor}`,
              marginTop: '8px',
              paddingTop: '8px',
            }}
          >
            <strong>Total</strong>
            <strong style={{ color: theme.primaryColor }}>
              {formatCurrency(invoice.total, invoice.currency)}
            </strong>
          </div>
        </div>
      </div>

      {/* Notes & Terms */}
      {(invoice.notes || invoice.termsAndConditions) && (
        <div
          style={{
            paddingTop: '32px',
            borderTop: `1px solid ${theme.borderColor}`,
          }}
        >
          {invoice.notes && (
            <div style={{ marginBottom: '24px' }}>
              <p
                style={{
                  fontSize: '11px',
                  color: theme.mutedTextColor,
                  margin: '0 0 8px 0',
                  letterSpacing: '1px',
                }}
              >
                NOTES
              </p>
              <p style={{ fontSize: '13px', margin: 0, lineHeight: '1.7' }}>
                {invoice.notes}
              </p>
            </div>
          )}

          {invoice.termsAndConditions && (
            <div>
              <p
                style={{
                  fontSize: '11px',
                  color: theme.mutedTextColor,
                  margin: '0 0 8px 0',
                  letterSpacing: '1px',
                }}
              >
                TERMS
              </p>
              <p
                style={{
                  fontSize: '13px',
                  color: theme.mutedTextColor,
                  margin: 0,
                  lineHeight: '1.7',
                }}
              >
                {invoice.termsAndConditions}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      {/* <div
        style={{
          backgroundColor: theme.accentColor,
          padding: '16px',
          textAlign: 'center',
          borderRadius: '12px',
          marginTop: '32px',
        }}
      >
        <p style={{ fontSize: '14px', color: theme.mutedTextColor, margin: 0 }}>
          Thank you for your business!
        </p>
      </div> */}
    </div>
  );
};
