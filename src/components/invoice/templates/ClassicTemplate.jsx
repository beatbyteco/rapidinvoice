'use client';

import { FileText } from 'lucide-react';
import { formatCurrency, formatDate } from '@/lib/invoice-utils';

export const ClassicTemplate = ({ invoice, theme }) => {
  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
        fontFamily: theme.fontFamily,
        padding: '40px',
        minHeight: '100%',
      }}
    >
      {/* Header */}
      <div
        style={{
          borderBottom: `3px solid ${theme.primaryColor}`,
          paddingBottom: '24px',
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {invoice.senderLogo ? (
              <img
                src={invoice.senderLogo}
                alt="Logo"
                style={{
                  height: '60px',
                  width: '60px',
                  objectFit: 'contain',
                }}
              />
            ) : (
              <div
                style={{
                  height: '60px',
                  width: '60px',
                  backgroundColor: theme.primaryColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FileText
                  style={{ height: '30px', width: '30px', color: '#FFFFFF' }}
                />
              </div>
            )}
            <div>
              <h2
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  margin: 0,
                  fontFamily: theme.fontFamily,
                }}
              >
                {invoice.senderName || 'Your Company'}
              </h2>
              <p
                style={{
                  fontSize: '14px',
                  color: theme.mutedTextColor,
                  margin: '4px 0 0 0',
                }}
              >
                {invoice.senderEmail}
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <h1
              style={{
                fontSize: '32px',
                fontWeight: 'bold',
                margin: 0,
                letterSpacing: '2px',
              }}
            >
              INVOICE
            </h1>
            <p
              style={{
                fontSize: '18px',
                fontWeight: '600',
                marginTop: '8px',
                color: theme.secondaryColor,
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
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '32px',
          marginBottom: '40px',
        }}
      >
        <div>
          <h4
            style={{
              fontSize: '12px',
              fontWeight: '700',
              color: theme.primaryColor,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '12px',
              borderBottom: `1px solid ${theme.borderColor}`,
              paddingBottom: '8px',
            }}
          >
            From
          </h4>
          <p style={{ fontWeight: '600', margin: 0, fontSize: '15px' }}>
            {invoice.senderName || '—'}
          </p>
          <p
            style={{
              fontSize: '14px',
              color: theme.mutedTextColor,
              whiteSpace: 'pre-line',
              margin: '8px 0',
              lineHeight: '1.6',
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
              fontSize: '12px',
              fontWeight: '700',
              color: theme.primaryColor,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '12px',
              borderBottom: `1px solid ${theme.borderColor}`,
              paddingBottom: '8px',
            }}
          >
            Bill To
          </h4>
          <p style={{ fontWeight: '600', margin: 0, fontSize: '15px' }}>
            {invoice.clientName || '—'}
          </p>
          <p
            style={{
              fontSize: '14px',
              color: theme.mutedTextColor,
              whiteSpace: 'pre-line',
              margin: '8px 0',
              lineHeight: '1.6',
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
          <h4
            style={{
              fontSize: '12px',
              fontWeight: '700',
              color: theme.primaryColor,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '12px',
              borderBottom: `1px solid ${theme.borderColor}`,
              paddingBottom: '8px',
            }}
          >
            Details
          </h4>

          <div style={{ marginBottom: '16px' }}>
            <p
              style={{
                fontSize: '12px',
                color: theme.mutedTextColor,
                margin: '0 0 4px 0',
              }}
            >
              Invoice Date
            </p>
            <p style={{ fontWeight: '500', margin: 0 }}>
              {formatDate(invoice.createdAt, 'long')}
            </p>
          </div>

          <div>
            <p
              style={{
                fontSize: '12px',
                color: theme.mutedTextColor,
                margin: '0 0 4px 0',
              }}
            >
              Due Date
            </p>
            <p style={{ fontWeight: '500', margin: 0 }}>
              {formatDate(invoice.dueDate, 'long')}
            </p>
          </div>
        </div>
      </div>

      {/* Items Table */}
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginBottom: '32px',
        }}
      >
        <thead>
          <tr style={{ backgroundColor: theme.primaryColor }}>
            {['Description', 'Qty', 'Price', 'Tax', 'Discount', 'Total'].map(
              (h) => (
                <th
                  key={h}
                  style={{
                    padding: '14px 16px',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#FFFFFF',
                    textTransform: 'uppercase',
                    textAlign:
                      h === 'Description'
                        ? 'left'
                        : h === 'Qty'
                        ? 'center'
                        : 'right',
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
                  borderBottom: `1px solid ${theme.borderColor}`,
                }}
              >
                No items added
              </td>
            </tr>
          ) : (
            invoice.items.map((item, index) => (
              <tr
                key={item.id}
                style={{ borderBottom: `1px solid ${theme.borderColor}` }}
              >
                <td style={{ padding: '14px 16px' }}>
                  {item.description || '—'}
                </td>
                <td style={{ textAlign: 'center' }}>{item.quantity}</td>
                <td style={{ textAlign: 'right' }}>
                  {formatCurrency(item.unitPrice, invoice.currency)}
                </td>
                <td style={{ textAlign: 'right' }}>{item.taxRate}%</td>
                <td style={{ textAlign: 'right' }}>{item.discount}%</td>
                <td style={{ textAlign: 'right', fontWeight: '600' }}>
                  {formatCurrency(item.total, invoice.currency)}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

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
          borderTop: `3px solid ${theme.primaryColor}`,
          paddingTop: '20px',
          marginTop: '40px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: '14px',
            color: theme.mutedTextColor,
            margin: 0,
            fontStyle: 'italic',
          }}
        >
          Thank you for your business!
        </p>
      </div> */}
    </div>
  );
};
